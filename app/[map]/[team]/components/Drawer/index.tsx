import { Bomb } from '@/app/types/Bomb';
import { Card, Drawer as DrawerFlow } from 'flowbite-react';

type DrawerProps = {
  positionsList: Bomb[];
  isOpen: boolean;
  handleClose: () => void;
};

const Drawer = ({ positionsList, isOpen, handleClose }: DrawerProps) => {
  return (
    <DrawerFlow open={isOpen} onClose={handleClose} position="right">
      <DrawerFlow.Header title="Posições" />

      <DrawerFlow.Items>
        <div className="space-y-5">
          {positionsList.map((position) => (
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
