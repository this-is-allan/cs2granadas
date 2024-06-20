'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Filters = () => {
  const router = useRouter();

  return (
    <div className="flex">
      <button
        className="align-center flex space-x-2 rounded-s bg-[#e38717] px-4 py-2 text-white hover:bg-[#c16b0f]"
        onClick={() => router.push(`?side=tr`, { scroll: false })}
      >
        <Image height={30} width={30} src="/images/teams/tr.png" alt="Terrorista" />
        <span>Terrorista</span>
      </button>
      <button
        className="align-center flex space-x-2 rounded-e bg-[#2c6ea4] px-4 py-2 text-white hover:bg-[#1e4a6f]"
        onClick={() => router.push(`?side=ct`, { scroll: false })}
      >
        <Image height={30} width={30} src="/images/teams/ct.png" alt="Contra-Terrorista" />
        <span>Contra-Terrorista</span>
      </button>
    </div>
  );
};

export default Filters;
