"use client";

import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef();

  useEffect(() => {
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return (
    <ReactLenis 
      root 
      ref={lenisRef}
      options={{ 
        lerp: 0.1, 
        duration: 1.5, 
        smoothWheel: true,
        anchors: true
      }}
    >
      {children}
    </ReactLenis>
  );
}
