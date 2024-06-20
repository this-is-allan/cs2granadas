import { MutableRefObject } from 'react';

import { Bomb } from '@/app/types/Bomb';
import Drawer from '@/app/components/Drawer';

type MapProps = {
  refElement: MutableRefObject<null>;
  mapPosition: any;
  mapSelected: any;
  isOpen: boolean;
  onClose: () => void;
};

const ViewMode = ({ refElement, mapPosition, mapSelected, isOpen, onClose }: MapProps) => {
  return (
    <>
      <div className="relative">
        <div className="h-[700px] w-full">
          <div ref={refElement} />
        </div>
      </div>

      <Drawer
        mapPosition={mapPosition}
        positionsList={mapSelected.bombs as Bomb[]}
        isOpen={isOpen}
        handleClose={onClose}
      />
    </>
  );
};

export default ViewMode;
