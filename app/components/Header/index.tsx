import Image from 'next/image';
import Link from 'next/link';
import Card from '../Card';

import mockList from '../../mocks/list';

export default function Header() {
  return (
    <Card>
      <div className="flex justify-between">
        {mockList.map((map) => (
          <Link key={map.name} href={`/${map.name}`}>
            <div className="flex h-[120px] flex-col justify-between border-red-500 p-2 text-center hover:border-b-2 hover:transition-all">
              <Image priority src={map.icon} alt={map.name} height={120} width={80} />
              <h2 className="text-xs font-semibold">{map.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
}
