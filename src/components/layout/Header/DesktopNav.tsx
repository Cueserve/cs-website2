"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  MEGA_MENU_ORDER,
  NAV_LABELS,
  NAV_HREFS,
} from "@/lib/navigation";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <div className="relative hidden md:block">
      <nav className="flex items-center gap-3 rounded-[99px] border border-[#D1E0FF] bg-white p-[10px]" aria-label="Primary">
        {MEGA_MENU_ORDER.map((key) => {
          const href = NAV_HREFS[key];
          const isActive = pathname === href || (href === '/' && pathname === '/home') || (href !== '/' && pathname.startsWith(href));

          return (
            <div key={key}>
              <Link
                href={href}
                className={navItemClass(isActive)}
              >
                {NAV_LABELS[key]}
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}

function navItemClass(isActive: boolean) {
  return [
    "flex h-10 items-center justify-center rounded-[99px] px-3 xl:px-4 text-nav transition-colors duration-150",
    isActive
      ? "bg-brand-subtle text-brand-default font-medium"
      : "bg-transparent text-neutral-900 hover:text-brand-default",
  ].join(" ");
}
