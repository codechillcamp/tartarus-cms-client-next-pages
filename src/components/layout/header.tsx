import Link from 'next/link';
import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLElement> & {};

export default function Header({ ...props }: Props) {
  return (
    <header className="p-4">
      <Link href="/">
        <h1 className="text-2xl">📦TartarusCMS</h1>
      </Link>
    </header>
  );
}
