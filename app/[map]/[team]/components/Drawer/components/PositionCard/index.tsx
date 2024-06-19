import { Bomb, Position } from '@/app/types/Bomb';
import { Card, Drawer as DrawerFlow } from 'flowbite-react';

type DrawerProps = {
  title: string;
  thumb: string;
};

const PositionCard = ({ title, thumb }: DrawerProps) => {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={thumb}
    >
      <h5 className="text-xl font-bold tracking-tight text-gray-900 text-white">{title}</h5>
    </Card>
  );
};

export default PositionCard;
