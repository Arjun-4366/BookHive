import { Button } from "@/components/ui/button";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

type Props = {};

function Header({}: Props) {
  return (
    <div className="p-3 shadow-md flex gap-2 justify-between">
      <div className="flex items-center gap-8">
        <div className="">
          <Image src={"/logo.png"} alt="logo" width={150} height={100} />
        </div>
        <DropdownMenu>
        <DropdownMenuTrigger>
        <h2 className=" hidden md:flex gap-2 items-center border rounded-full p-2 px-8 bg-slate-100">
          <LayoutGrid className="h-5 w-5 hover:cursor-pointer" />
          Categories
        </h2>
        
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Choose Category</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Fiction</DropdownMenuItem>
    <DropdownMenuItem>Non-Fiction</DropdownMenuItem>
    <DropdownMenuItem>Mystery & Thriller</DropdownMenuItem>
    <DropdownMenuItem>Romance</DropdownMenuItem>
    <DropdownMenuItem>Science Fiction & Fantasy</DropdownMenuItem>
    <DropdownMenuItem>Biographies & Memoirs</DropdownMenuItem>
    <DropdownMenuItem>Self-Help & Personal Development</DropdownMenuItem>
    <DropdownMenuItem>Children's</DropdownMenuItem>
    <DropdownMenuItem>Cookbooks & Food</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

        <div className="md:flex gap-3 items-center border rounded-full p-2 px-5 bg-slate-100 hidden">
        <Search/>
        <input type="text" placeholder="Search" className="bg-slate-100 outline-none"/>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="flex gap-2 items-center">

        <ShoppingBag/>
        0
        </h2>
           <Button>Login</Button>
      </div>
    </div>
  );
}

export default Header;
