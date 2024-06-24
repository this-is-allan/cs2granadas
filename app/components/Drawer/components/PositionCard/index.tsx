import type { Position, Map } from '@/app/types/Bomb';
import Image from 'next/image';
import { Card } from 'flowbite-react';
import { useState } from 'react';
import VideoPlayerModal from '../VideoPlayerModal';

type DrawerProps = {
  mapSelected: Map;
  position: Position;
};

const PositionCard = ({ mapSelected, position }: DrawerProps) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenPositionCard = () => setOpenModal(true);
  const handleClosePositionCard = () => setOpenModal(false);

  return (
    <>
      <Card
        className="max-w-sm cursor-pointer"
        renderImage={() => (
          <Image
            width={500}
            height={200}
            src={`/assets/maps/${mapSelected.name}/${position.video.thumb}`}
            alt="image 1"
            className="h-48 w-full rounded-t-lg object-cover"
          />
        )}
        onClick={handleOpenPositionCard}
      >
        <h5 className="text-xl font-bold tracking-tight text-gray-900 text-white">
          {position.title}
        </h5>
      </Card>

      <VideoPlayerModal
        mapSelected={mapSelected}
        position={position}
        openModal={openModal}
        onCloseModal={handleClosePositionCard}
      />
    </>
  );
};

export default PositionCard;
