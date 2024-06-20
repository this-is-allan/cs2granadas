import { Bomb, Position } from '@/app/types/Bomb';
import { Drawer as DrawerFlow } from 'flowbite-react';
import PositionCard from './components/PositionCard';

type DrawerProps = {
  mapPosition?: Position;
  positionsList: Bomb[];
  isOpen: boolean;
  handleClose: () => void;
};

const Drawer = ({ mapPosition, positionsList, isOpen, handleClose }: DrawerProps) => {
  const positionSelected = positionsList.find((position) => position.title === mapPosition?.title);

  return (
    <DrawerFlow open={isOpen} onClose={handleClose} position="right">
      <DrawerFlow.Header title="Posições" />

      <DrawerFlow.Items>
        <div className="space-y-5">
          {positionSelected?.positions.map((position) => (
            <PositionCard key={position.title} position={position} />
          ))}
        </div>
      </DrawerFlow.Items>
    </DrawerFlow>
  );
};

export default Drawer;
