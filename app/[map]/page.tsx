'use client';

import { useSearchParams } from 'next/navigation';

import Filters from '../components/Filters';
import Header from '../components/Header';
import Map from '../components/Map';
import { Side } from '../types/Bomb';

type PageProps = {
  params: {
    map: string;
  };
};

export default function Page({ params }: PageProps) {
  const searchParams = useSearchParams();

  const side = searchParams.get('side') as Side;

  return (
    <main>
      <Header />
      <div className="mt-6">
        <Filters />
      </div>
      <div className="mt-6">
        <Map mode="view" map={params.map} side={side || 'tr'} />
      </div>
    </main>
  );
}
