"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavbarSidebar } from "./navbar-sidebar";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full border-transparent hover:border-primary px-4 py-2 text-base transition-colors duration-200",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const NavbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <nav className="h-20 flex items-center justify-between border-b bg-white px-4 md:px-8 font-medium shadow-sm z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <span className={cn("text-4xl font-bold tracking-tight", poppins.className)}>
          Bazario
        </span>
      </Link>

      {/* Mobile Sidebar */}
      <NavbarSidebar
        items={NavbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />

      {/* Main Nav Items - Large Screen */}
      <div className="hidden lg:flex items-center gap-4">
        {NavbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className="hidden lg:flex">
        <Button
          asChild
          variant="secondary"
          className="border-l border-t-0 border-b-0 border-r-0 px-10 h-full rounded-none bg-white hover:bg-blue-500 text-base"
        >
          <Link href="/sign-in">Log in</Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          className="border-l border-t-0 border-b-0 border-r-0 px-10 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black text-base transition-colors"
        >
          <Link href="/sign-up">Start selling</Link>
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex lg:hidden items-center">
        <Button
          variant="ghost"
          className="size-10 bg-white"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon className="w-6 h-6" />
        </Button>
      </div>
    </nav>
  );
};
