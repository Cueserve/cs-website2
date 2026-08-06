'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function WebflowInit() {
  const pathname = usePathname();

  useEffect(() => {
    const handleInit = () => {
      // @ts-ignore
      if (typeof window !== 'undefined' && window.Webflow) {
        try {
          // @ts-ignore
          window.Webflow.destroy();
          // @ts-ignore
          window.Webflow.ready();
          // @ts-ignore
          const ix2 = window.Webflow.require('ix2');
          if (ix2) {
            ix2.init();
          }
        } catch (e) {
          console.error('Webflow reinit error:', e);
        }
      }
    };

    const timer = setTimeout(handleInit, 200);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
