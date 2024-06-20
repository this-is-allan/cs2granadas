import { MutableRefObject } from 'react';

import Card from '@/app/components/Card';
import { Bomb } from '@/app/types/Bomb';
import Drawer from '@/app/components/Drawer';

type MapProps = {
  refElement: MutableRefObject<null>;
  mapPosition: any;
  mapSelected: any;
  isOpen: boolean;
  onClose: () => void;
  onAddSmoke: () => void;
  onGenerate: () => void;
};

const EditMode = ({
  refElement,
  mapPosition,
  mapSelected,
  isOpen,
  onClose,
  onAddSmoke,
  onGenerate,
}: MapProps) => {
  return (
    <Card>
      <div className="flex gap-6">
        <button onClick={onAddSmoke}>Adicionar smoke</button>
        <button onClick={onGenerate}>Gerar</button>
      </div>
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
    </Card>
  );
};

export default EditMode;
