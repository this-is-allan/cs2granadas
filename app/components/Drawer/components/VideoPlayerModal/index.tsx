import type { Position, Map } from '@/app/types/Bomb';
import { Modal } from 'flowbite-react';

type DrawerProps = {
  mapSelected: Map;
  position: Position;
  openModal: boolean;
  onCloseModal: () => void;
};

const VideoPlayerModal = ({ mapSelected, position, openModal, onCloseModal }: DrawerProps) => {
  return (
    <Modal dismissible show={openModal} onClose={onCloseModal}>
      <Modal.Body>
        <video className="h-[900px] w-[1920px] rounded-lg" controls autoPlay muted>
          {/* <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" /> */}
          <source
            src={`assets/maps/${mapSelected.name}/${position.video.filename}`}
            type="video/mp4"
          />
        </video>
      </Modal.Body>
    </Modal>
  );
};

export default VideoPlayerModal;
