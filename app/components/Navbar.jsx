import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="w-full max-w-6xl mx-auto px-8">
        <ul className="flex gap-8 py-5 border-b-[1px] border-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
