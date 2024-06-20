import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

import EditMode from './EditMode';
import ViewMode from './ViewMode';

import { Bomb, Position, Side } from '@/app/types/Bomb';
import mockList from '@/app/mocks/list';

type MapProps = {
  mode: 'edit' | 'view';
  map: string;
  side: Side;
};

const Map = ({ mode, side, map }: MapProps) => {
  const SVGWrapperRefElement = useRef(null);

  const mapSelected = mockList.find((map) => map.name === map.map) || mockList[0];

  const [isOpen, setIsOpen] = useState(false);
  const [mapPosition, setMapPosition] = useState<Position>();
  const [circlePositions, setCirclePositions] = useState<Bomb[]>(mapSelected.bombs as Bomb[]);

  const handleClose = () => setIsOpen(false);

  const handleGenerate = () => {
    console.log(circlePositions);
  };

  const handleOpen = (position: Position) => {
    setIsOpen(true);
    setMapPosition(position);
  };

  const smokePin = () => {
    switch (side) {
      case 'tr':
        return '/images/bombs/smoke-tr.svg';
      case 'ct':
        return '/images/bombs/smoke-ct.svg';
    }
  };

  const drawSmoke = (svg: any, bomb: Bomb) => {
    if (bomb.side !== side) return;

    const smokeImage = svg
      .append('image')
      .attr('xlink:href', smokePin)
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

    if (mode === 'edit') smokeImage.call(dragHandler);
    if (mode === 'view') smokeImage.call(() => handleOpen);
  };

  const handleAddSmoke = () => {
    setCirclePositions((prevPositions) => [
      ...prevPositions,
      { type: 'smoke', cx: 50, cy: 50, positions: [] },
    ]);
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
  }, [circlePositions, side]);

  return (
    <>
      {mode === 'edit' && (
        <EditMode
          refElement={SVGWrapperRefElement}
          mapPosition={mapPosition}
          mapSelected={mapSelected}
          isOpen={isOpen}
          onGenerate={handleGenerate}
          onClose={handleClose}
          onAddSmoke={handleAddSmoke}
        />
      )}
      {mode === 'view' && (
        <ViewMode
          refElement={SVGWrapperRefElement}
          mapPosition={mapPosition}
          mapSelected={mapSelected}
          isOpen={isOpen}
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default Map;
