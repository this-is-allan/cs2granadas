'use client';
import { useEffect, useRef, useState } from 'react';

import * as d3 from 'd3';

import Card from '@/app/components/Card';
import Header from '@/app/components/Header';
import Drawer from './components/Drawer';

import mockList from '@/app/mocks/list';
import { Bomb, Position } from '@/app/types/Bomb';

type PageProps = {
  params: {
    map: string;
    team: string;
  };
};

export default function Page({ params }: PageProps) {
  const SVGWrapperRefElement = useRef(null);

  const mapSelected = mockList.find((map) => map.name === params.map) || mockList[0];

  const [circlePositions, setCirclePositions] = useState<Bomb[]>(mapSelected.bombs as Bomb[]);
  const [isOpen, setIsOpen] = useState(false);
  const [mapPosition, setMapPosition] = useState<Position>();

  const handleClose = () => setIsOpen(false);
  const handleOpen = (position: Position) => {
    setIsOpen(true);
    setMapPosition(position);
  };

  const draw = () => {
    console.log(circlePositions);
  };

  const addSmoke = () => {
    setCirclePositions((prevPositions) => [
      ...prevPositions,
      { type: 'smoke', cx: 50, cy: 50, positions: [] },
    ]);
  };

  const drawSmoke = (svg: any, bomb: Bomb) => {
    svg
      .append('image')
      .attr('xlink:href', '/images/bombs/smoke-tr.svg')
      .attr('x', bomb.cx - 15)
      .attr('y', bomb.cy - 15)
      .attr('width', 30)
      .attr('height', 30)
      .style('cursor', 'pointer')
      .on('click', () => handleOpen(bomb));
  };
  useEffect(() => {
    if (!SVGWrapperRefElement.current) return;

    const svg = d3
      .select(SVGWrapperRefElement.current)
      .append('svg')
      .attr('width', '700px')
      .attr('height', '700px');

    svg
      .append('image')
      .attr('xlink:href', mapSelected.map)
      .attr('width', '100%')
      .attr('height', '100%')
      .style('background-size', 'contain');

    circlePositions.forEach((bomb, index) => {
      const circle = drawSmoke(svg, bomb) as any;

      const drag = d3.drag().on('drag', (event) => {
        const newCx = event.x;
        const newCy = event.y;
        d3.select(event.sourceEvent.target).attr('cx', newCx).attr('cy', newCy);

        setCirclePositions((prevPositions) => {
          const updatedPositions = [...prevPositions];
          updatedPositions[index] = { type: 'smoke', cx: newCx, cy: newCy, positions: [] };
          return updatedPositions;
        });
      });

      circle?.call(drag as any);
    });

    return () => {
      svg.remove();
    };
  }, [circlePositions]);

  return (
    <main className="relative flex flex-col items-center justify-between p-24">
      <Header />
      <Card>
        <div className="flex gap-6">
          <button onClick={addSmoke}>Adicionar smoke</button>
          <button onClick={draw}>Gerar</button>
        </div>
        <div className="relative">
          <div className="h-[700px] w-full">
            <div ref={SVGWrapperRefElement} />
          </div>
        </div>

        <Drawer
          mapPosition={mapPosition}
          positionsList={mapSelected.bombs as Bomb[]}
          isOpen={isOpen}
          handleClose={handleClose}
        />
      </Card>
    </main>
  );
}
