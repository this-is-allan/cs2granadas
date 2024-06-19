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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>
      </body>
    </html>
  );
}
