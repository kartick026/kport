"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Work", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="modern-navbar sticky top-0 z-50 w-full">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Clean K Logo */}
          <Link href="/" className="group">
            <div className="clean-k-logo">
              <span className="k-text">K</span>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "nav-link text-sm font-medium tracking-wide uppercase",
                  pathname === item.href ? "text-blue-400" : "text-gray-400 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Resume Button */}
          <div className="flex items-center">
                <Link 
                  href="/autoCV (1).pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
              <div className="px-6 py-2.5 bg-transparent border border-gray-600 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 group-hover:scale-105 resume-button">
                Resume
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}