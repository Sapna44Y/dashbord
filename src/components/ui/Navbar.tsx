"use client";

import { FiSearch, FiBell, FiMenu } from "react-icons/fi";
import { format } from "date-fns";
import { Breadcrumb } from "./Breadcrumb";

export function Navbar({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  const currentDate = format(new Date(), "EEEE, MMMM d, yyyy");

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm p-4 flex items-center justify-between">
     
      <div className="flex items-center space-x-3">
        
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={onMenuClick}
        >
          <FiMenu className="text-xl" />
        </button>
       
        <div className="text-sm md:text-base font-medium truncate">
          <Breadcrumb />
        </div>
      </div>

     
      <div className="flex items-center space-x-3 md:space-x-4">
        
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-32 sm:w-48 md:w-64"
          />
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        
        <button className="sm:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <FiSearch className="text-gray-600 dark:text-gray-300 text-lg" />
        </button>

     
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <FiBell className="text-gray-600 dark:text-gray-300 text-lg" />
        </button>

        
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
            JD
          </div>
          
          <div className="hidden md:flex flex-col ml-2">
            <p className="font-medium dark:text-white text-sm">John Doe</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {currentDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

