'use client';
import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import Card from '@/app/components/Card';
import mockList from '@/app/mocks/list';
import { Bomb, Position, Side } from '@/app/types/Bomb';
import Drawer from '@/app/[map]/[team]/components/Drawer';

type MapProps = {
  map: string;
  side: Side;
};

const Map = ({ map, side }: MapProps) => {
  const SVGWrapperRefElement = useRef(null);

  const mapSelected = mockList.find((map) => map.name === map.map) || mockList[0];

  const [circlePositions, setCirclePositions] = useState<Bomb[]>(mapSelected.bombs as Bomb[]);
  const [isOpen, setIsOpen] = useState(false);
  const [mapPosition, setMapPosition] = useState<Position>();

  const handleClose = () => setIsOpen(false);
  const handleOpen = (position: Position) => {
    setIsOpen(true);
    setMapPosition(position);
  };

  const generate = () => {
    console.log(circlePositions);
  };

  const addSmoke = () => {
    setCirclePositions((prevPositions) => [
      ...prevPositions,
      { type: 'smoke', cx: 50, cy: 50, positions: [] },
    ]);
  };

  const drawSmoke = (svg: any, bomb: Bomb) => {
    const smokeImage = svg
      .append('image')
      .attr('xlink:href', '/images/bombs/smoke-tr.svg')
      .attr('x', bomb.cx - 15)
      .attr('y', bomb.cy - 15)
      .attr('width', 30)
      .attr('height', 30)
      .style('cursor', 'pointer')
      .on('click', () => handleOpen(bomb));

    const dragHandler = d3
      .drag()
      .on('start', (event: any, d: any) => {
        d3.select(event.sourceEvent.target).raise().attr('stroke', 'black');
      })
      .on('drag', (event: any, d: any) => {
        const x = event.x;
        const y = event.y;
        smokeImage.attr('x', x - 15).attr('y', y - 15);
      })
      .on('end', (event: any, d: any) => {
        d3.select(event.sourceEvent.target).attr('stroke', null);
        const updatedPositions = circlePositions.map((pos) =>
          pos === bomb ? { ...pos, cx: event.x, cy: event.y } : pos,
        );
        setCirclePositions(updatedPositions);
      });

    smokeImage.call(dragHandler);
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

    circlePositions.forEach((bomb) => {
      drawSmoke(svg, bomb);
    });

    return () => {
      svg.remove();
    };
  }, [circlePositions]);

  return (
    <Card>
      <div className="flex gap-6">
        <button onClick={addSmoke}>Adicionar smoke</button>
        <button onClick={generate}>Gerar</button>
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
  );
};

export default Map;
