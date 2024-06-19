import { Bomb, Position } from '@/app/types/Bomb';
import { Card, Drawer as DrawerFlow } from 'flowbite-react';

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
            <Card
              key={position.thumb}
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={position.thumb}
            >
              <h5 className="text-xl font-bold tracking-tight text-gray-900 text-white">
                {position.title}
              </h5>
            </Card>
          ))}
        </div>
      </DrawerFlow.Items>
    </DrawerFlow>
  );
};

export default Drawer;
