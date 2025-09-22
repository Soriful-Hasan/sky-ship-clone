"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronRight, Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center bg-[#0E6ED8] justify-between px-6 py-4 ">
      {/* Logo */}
      <Link href="/" className=" w-26 font-bold">
        <img
          src="https://skyshipbd.com/_next/static/media/logo.28c56c27.svg"
          alt="logo"
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex font-semibold mr-10 items-center space-x-6 text-white">
        <Link href="/Pages/pricing">Pricing</Link>
        <Link href="/Pages/about">About</Link>
        <Link href="/Pages/contact">Contact</Link>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="cursor-pointer" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <SheetHeader className=" flex justify-center items-center">
              <Link href="/" className="w-26 font-bold">
                <img
                  src="https://skyshipbd.com/_next/static/media/logo.28c56c27.svg"
                  alt="logo"
                />
              </Link>
            </SheetHeader>

            <div className="mt-6  flex flex-col space-y-4 justify-center font-semibold">
              <Link
                href="/Pages/pricing"
                onClick={() => setOpen(false)}
                className="flex hover:bg-gray-100 rounded-sm p-2 m-4 justify-between  items-center"
              >
                <span>Pricing</span>
                <ChevronRight className="w-4 h-4 " />
              </Link>
              <Link
                href="/Pages/about"
                onClick={() => setOpen(false)}
                className="flex hover:bg-gray-100 rounded-sm p-2 m-4 justify-between  items-center"
              >
                <span>About</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/Pages/contact"
                onClick={() => setOpen(false)}
                className="flex hover:bg-gray-100 rounded-sm p-2 m-4 justify-between  items-center"
              >
                <span>Contact</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
