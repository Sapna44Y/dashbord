"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiFileText,
  FiCreditCard,
  FiDollarSign,
  FiFile,
  FiBell,
  FiX
} from "react-icons/fi";
import { useEffect, useState } from "react";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: <FiHome /> },
  { name: "Applications", path: "/otherpage", icon: <FiFileText /> },
  { name: "Billing", path: "/otherpage", icon: <FiCreditCard /> },
  { name: "Rate Card", path: "/otherpage", icon: <FiDollarSign /> },
  { name: "Agreement Copy", path: "/otherpage", icon: <FiFile /> },
  { name: "Notices", path: "/otherpage", icon: <FiBell /> },
];

export function Sidebar({
  isMobileOpen,
  setIsMobileOpen,
}: {
  isMobileOpen: boolean;
  setIsMobileOpen: (val: boolean) => void;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
     
      {isMobileOpen && isMobile && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 z-50
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          ${collapsed && !isMobile ? "w-20" : "w-56"} md:translate-x-0`}
      >
        <div className="p-4 flex items-center justify-between">
          {!collapsed && !isMobile && (
            <h1 className="text-xl font-bold">KYC Dashboard</h1>
          )}

          <button
            onClick={() => {
              if (isMobile) {
                setIsMobileOpen(false);
              } else {
                setCollapsed(!collapsed);
              }
            }}
            className="p-2 rounded-lg hover:bg-gray-700"
          >
            {isMobile ? <FiX /> : collapsed ? ">" : "<"}
          </button>
        </div>

        <nav className="mt-8">
          <ul>
            {menuItems.map((item) => (
              <li key={item.name} className="mb-2">
                <Link
                  href={item.path}
                  className={`flex items-center p-3 ${
                    pathname === item.path
                      ? "bg-gray-700"
                      : "hover:bg-gray-700"
                  } rounded-lg`}
                  onClick={() => isMobile && setIsMobileOpen(false)}
                >
                  <span className="mr-3">{item.icon}</span>
                  {!collapsed && !isMobile && <span>{item.name}</span>}
                  {isMobile && <span>{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
