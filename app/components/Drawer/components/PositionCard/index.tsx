import { Position } from '@/app/types/Bomb';
import { Modal, Button, Card, Drawer as DrawerFlow } from 'flowbite-react';
import { useState } from 'react';
import VideoPlayerModal from '../VideoPlayerModal';

type DrawerProps = {
  position: Position;
};

const PositionCard = ({ position }: DrawerProps) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenPositionCard = () => setOpenModal(true);
  const handleClosePositionCard = () => setOpenModal(false);

  return (
    <>
      <Card
        className="max-w-sm cursor-pointer"
        imgSrc={position.thumb}
        onClick={handleOpenPositionCard}
      >
        <h5 className="text-xl font-bold tracking-tight text-gray-900 text-white">
          {position.title}
        </h5>
      </Card>

      <VideoPlayerModal
        position={position}
        openModal={openModal}
        onCloseModal={handleClosePositionCard}
      />
    </>
  );
};

export default PositionCard;
