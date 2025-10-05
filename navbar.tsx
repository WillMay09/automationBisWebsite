"use client";
import Link from "next/link";

import { useState } from "react";

import { Menu } from "lucide-react"; //for mobile icon

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#4a4a4a] text-white">
      {/*Logo*/}
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold tracking-tight">CLOUDZERO</span>
      </div>

      <div className="hidden md:flex max-w-3xl items-center space-x-10 text-sm">
        <Link href="">Projects</Link>
        <Link href="">Services</Link>
        <Link href="">About</Link>
        <Link href="">Testimonials</Link>
        <Link href="">Pricing</Link>
      </div>

      {/*Right Section*/}

      <div className="hidden md:flex items-center space-x-4">
        <Link href="" className="bg-[#4a4a4a] border-2 border-white">
          Have a Question
        </Link>
        <Link href="" className="bg-[#fe6036] border-2 border-[#fe6036]">
          Schedule a Demo
        </Link>
      </div>
    </nav>
  );
}
