import type { Metadata } from 'next';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { ReactNode } from 'react';
import { Flowbite } from 'flowbite-react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rami7',
  description: 'Rami7',
};

const customTheme: CustomFlowbiteTheme = {
  drawer: {
    root: {
      base: 'fixed z-40 overflow-y-auto p-4 transition-transform bg-gray-800',
    },
    header: {
      inner: {
        titleIcon: 'hidden',
        titleText: 'mb-4 inline-flex items-center text-base font-semibold text-white',
      },
    },
  },
  card: {
    root: {
      base: 'flex rounded-lg border shadow-md border-[#26282D] bg-[#13151B]',
    },
  },
  modal: {
    content: {
      base: 'relative h-full w-full p-4 md:h-auto',
      inner: 'relative flex max-h-[90dvh] flex-col rounded-lg bg-gray-700 shadow',
    },
    body: {
      base: 'flex-1 overflow-auto text-white',
    },
  },
  button: {
    color: {
      tr: 'bg-[#e38717] text-white hover:bg-[#c16b0f]',
      ct: 'bg-[#2c6ea4] text-white hover:bg-[#1e4a6f]',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Flowbite theme={{ theme: customTheme }}>
          <div className="mt-4 px-24">{children}</div>
        </Flowbite>
      </body>
    </html>
  );
}
