"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  MEGA_MENU_ORDER,
  NAV_LABELS,
} from "@/lib/navigation";
import type { MenuKey } from "@/lib/navigation";

const TARGET_IDS: Record<MenuKey, string> = {
  home: "home",
  about: "about",
  services: "services",
  solutions: "solutions",
  ourWork: "projects",
  blog: "blog",
};

export function DesktopNav() {
  const pathname = usePathname();
  const [activeIds, setActiveIds] = useState<Record<string, boolean>>({});
  const isHomePage = pathname === "/" || pathname === "/home";

  useEffect(() => {
    const checkIds = () => {
      const ids: Record<string, boolean> = {};
      MEGA_MENU_ORDER.forEach((key) => {
        const id = TARGET_IDS[key];
        if (isHomePage) {
          ids[key] = !!document.getElementById(id);
        } else {
          ids[key] = true;
        }
      });
      setActiveIds(ids);
    };

    checkIds();
    const timer1 = setTimeout(checkIds, 50);
    const timer2 = setTimeout(checkIds, 300);
    const timer3 = setTimeout(checkIds, 1000);

    const observer = new MutationObserver(checkIds);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      observer.disconnect();
    };
  }, [pathname, isHomePage]);

  return (
    <div className="relative hidden md:block">
      <nav className="flex items-center gap-3 rounded-[99px] border border-[#D1E0FF] bg-white p-[10px]" aria-label="Primary">
        {MEGA_MENU_ORDER.map((key) => {
          if (!activeIds[key]) return null;

          const targetId = TARGET_IDS[key];
          const href = isHomePage ? `#${targetId}` : `/home#${targetId}`;
          return (
            <div key={key}>
              <a
                href={href}
                className={navItemClass(false)}
              >
                {NAV_LABELS[key]}
              </a>
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
