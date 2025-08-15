"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronRight } from "react-icons/fi";

export function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {paths.map((path, index) => (
          <li key={path}>
            <div className="flex items-center">
              
              {index > 0 && (
                <FiChevronRight className="mx-1 text-gray-400 text-xs sm:text-sm md:text-base" />
              )}
              <Link
                href={`/${paths.slice(0, index + 1).join("/")}`}
                className={`ml-1 
                  text-xs sm:text-sm md:text-lg lg:text-xl 
                  font-medium sm:font-semibold md:font-bold lg:font-extrabold
                  ${index === paths.length - 1
                    ? "text-blue-600 dark:text-white"
                    : "text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  }`}
              >
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

