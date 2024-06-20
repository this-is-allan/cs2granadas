import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="relative w-full rounded-lg border border-[#26282D] bg-[#13151B] p-5">
      {children}
    </div>
  );
}
