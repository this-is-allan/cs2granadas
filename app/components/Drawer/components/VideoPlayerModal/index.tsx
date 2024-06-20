import { Position } from '@/app/types/Bomb';
import { Modal } from 'flowbite-react';

type DrawerProps = {
  position: Position;
  openModal: boolean;
  onCloseModal: () => void;
};

const VideoPlayerModal = ({ position, openModal, onCloseModal }: DrawerProps) => {
  return (
    <Modal dismissible show={openModal} size="6xl" onClose={onCloseModal}>
      <Modal.Body>
        <video className="h-full w-full rounded-lg" controls autoPlay muted>
          <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal.Body>
    </Modal>
  );
};

export default VideoPlayerModal;
