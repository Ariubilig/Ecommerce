"use client";

import { ReactLenis } from "lenis/react";
import Menu from "@/components/Menu/Menu";

export default function ClientLayout({ children }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
        lerp: 0.1,
        wheelMultiplier: 1,
        orientation: "vertical",
        smoothWheel: true,
        syncTouch: true,
      }}
    >
      <Menu />
      {children}
    </ReactLenis>
  );
}
