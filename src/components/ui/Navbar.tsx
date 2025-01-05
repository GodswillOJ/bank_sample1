"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo2 } from "@/components/ui/logo"; // Adjust the import if necessary
import { Sidebar } from "@/components/ui/Sidebar";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // For login/logout logic
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    router.push("/sign-in");
  };

  // Check login status
  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <nav className="navbar_home flex items-center justify-between p-2 bg-gray-800 text-white">
      {/* Logo */}
      <div className="logo-container">
        <Link href={"/"}>
          <Logo2 />
        </Link>
      </div>

      {/* Hamburger for Mobile */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`p-2 rounded ${isSidebarOpen ? "bg-yellow-600" : "bg-gray-800"}`}
        >
          <div className="space-y-1">
            <div className="w-6 h-1 bg-white rounded"></div>
            <div className="w-6 h-1 bg-white rounded"></div>
            <div className="w-6 h-1 bg-white rounded"></div>
          </div>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex">
        <ul className="sign-in-menu space-x-4">
          <li>
            <Link href="/sign-in">
             Bank Online
            </Link>
          </li>
          <li>
            <Link href="/sign-in">
              Secure online Hub
            </Link>
          </li>
          <li>
            <Link href="/sign-in">
              Exclusive Private Banking
            </Link>
          </li>
          <li>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="hover:underline">
                Logout
              </button>
            ) : (
              <Link href="/sign-in">Login</Link>
            )}
          </li>
          <li>
            <Link href="/sign-in">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Sidebar for Mobile */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </nav>
  );
};

export default Navbar;
