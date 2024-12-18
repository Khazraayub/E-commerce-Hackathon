import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { Search, ChevronDown, Menu } from "lucide-react";
import "@fontsource/josefin-sans";
// Supports weights 100-700
import "@fontsource-variable/josefin-sans";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-evenly px-6 py-4 lg:px-16">
        {/* Logo */}
        <h1 className="font-[700] text-[34px] leading-[34px] lg:text-[34px]  text-[#0D0E43]">
          Hekto
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center font-[lato] font-[400] text-[16px]">
          <Link
            href="/"
            className="text-[#FB2E86] flex items-center hover:underline"
          >
            Home
            <ChevronDown className="ml-1 mt-[2px] text-[#FB2E86] w-4 h-4" />
          </Link>
          <Link href="/pages" className="hover:underline hover:text-[#FB2E86]">
            Pages
          </Link>
          <Link
            href="/productdetails"
            className="hover:underline hover:text-[#FB2E86]"
          >
            Products
          </Link>
          <Link href="/blog" className="hover:underline hover:text-[#FB2E86]">
            Blog
          </Link>
          <Link href=" " className="hover:underline hover:text-[#FB2E86]">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex">
                Shop <ChevronDown className="ml-1 mt-[6px]  w-4 h-4" />{" "}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/shop-grid">Shop Grid Default</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/shoplist">Shop List</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Link>
          <Link
            href=" "
            className="  items-center hover:underline hover:text-[#FB2E86]"
          >
            <DropdownMenu>
              <DropdownMenuTrigger className="flex">
                Contact <ChevronDown className="ml-1 mt-[6px]  w-4 h-4" />{" "}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/contact">Contact Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/demo">Demo </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Link>
        </nav>

        {/* Search Bar (Desktop Only) */}
        <div className="hidden lg:flex items-center space-x-2">
          <div className="flex w-[250px] h-[40px] items-center border-[2px] border-[#E7E6EF] rounded">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 px-2 text-sm text-black placeholder-gray-500 outline-none"
            />
            <button className="w-[50px] h-full bg-[#FB2E86] flex justify-center items-center rounded-r">
              <Search className="text-white w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu size={28} className="text-[#0D0E43]" />
          </SheetTrigger>
          <SheetContent side="right">
            <div className="p-6 bg-white text-[#FB2E86]">
              <nav className="flex flex-col gap-6">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <Link href="/pages" className="hover:underline">
                  Pages
                </Link>
                <Link href="/productdetails" className="hover:underline">
                  Products
                </Link>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
                <Link href="/shop-grid" className="hover:underline">
                  Shop Grid Default
                </Link>
                <Link href="/shoplist" className="hover:underline">
                  Shop List
                </Link>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
                <Link href="/demo" className="hover:underline">
                  Demo
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
