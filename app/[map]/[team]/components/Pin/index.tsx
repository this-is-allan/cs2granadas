import { ReactNode } from 'react';
import Image from 'next/image';

type CardProps = {
  top: number;
  left: number;
};

const Pin = ({ left, top }: CardProps) => {
  return (
    // <div className="absolute left-[350px] top-[200px] cursor-pointer rounded-full">
    <div
      className="absolute z-40 h-0 -translate-x-1/2 -translate-y-1/2 text-black opacity-80 transition-all hover:scale-105 hover:opacity-90"
      // style={{ left: `${left}px`, top: `${top}px` }}
      style={{ left: `${left * 100}%`, top: `${top * 100}%` }}
    >
      <Image src={`/images/bombs/smoke-ct.svg`} height={30} width={30} alt="" />
    </div>
  );
};

export default Pin;
