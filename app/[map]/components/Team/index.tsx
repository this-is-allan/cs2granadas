import Image from 'next/image';
import Link from 'next/link';

type TeamProps = {
  map: string;
};

export default function Team({ map }: TeamProps) {
  return (
    <div className="flex justify-center space-x-6">
      <Link href={`${map}/tr`}>
        <div className="cursor-pointer space-y-4 text-center">
          <Image
            src="/images/tr.jpeg"
            alt="terroristas"
            height={300}
            width={280}
            className="rounded border-4 border-gray-500 hover:border-red-600"
          />
          <h2 className="text-3xl font-semibold">TR</h2>
        </div>
      </Link>

      <Link href={`${map}/ct`}>
        <div className="cursor-pointer space-y-4 text-center">
          <Image
            src="/images/ct.jpeg"
            alt="terroristas"
            height={300}
            width={280}
            className="rounded border-4 border-gray-500 hover:border-blue-600"
          />
          <h2 className="text-3xl font-semibold">CT</h2>
        </div>
      </Link>
    </div>
  );
}
