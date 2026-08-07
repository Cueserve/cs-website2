"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  MEGA_MENU_ORDER,
  NAV_LABELS,
} from "@/lib/navigation";
import type { MenuKey } from "@/lib/navigation";

interface Props {
  mobileNavOpen: boolean;
  openMobileMenu: MenuKey | null;
  onAccordionToggle: (key: MenuKey) => void;
  onCloseNav: () => void;
}

const TARGET_IDS: Record<MenuKey, string> = {
  home: "home",
  about: "about",
  services: "services",
  solutions: "solutions",
  ourWork: "projects",
  blog: "blog",
};

export function MobileMenu({
  mobileNavOpen,
  openMobileMenu,
  onAccordionToggle,
  onCloseNav,
}: Props) {
  const pathname = usePathname();
  const [activeIds, setActiveIds] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const checkIds = () => {
      const ids: Record<string, boolean> = {};
      MEGA_MENU_ORDER.forEach((key) => {
        const id = TARGET_IDS[key];
        ids[key] = !!document.getElementById(id);
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
  }, [pathname]);

  return (
    <nav
      className="xl:hidden pb-4 pt-2"
      aria-label="Mobile primary"
    >
      <ul className="mx-auto flex w-full flex-col gap-2 px-6">
        {MEGA_MENU_ORDER.map((key) => {
          if (!activeIds[key]) return null;

          const targetId = TARGET_IDS[key];
          return (
            <li key={key} className="w-full">
              <a
                href={`#${targetId}`}
                onClick={onCloseNav}
                className="flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left text-xl font-paragraph font-normal transition-all duration-300 text-cs-ink hover:bg-[#f4f8ff] hover:text-brand-default"
              >
                {NAV_LABELS[key]}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
