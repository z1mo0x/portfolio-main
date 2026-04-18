"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const options = {
            smoothTouch: true,
            anchors: true,
            syncTouch: true
        };

        const lenis = new Lenis(options);
        lenisRef.current = lenis;

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []); // ✅ Пустой массив зависимостей — инициализация один раз

    return <>{children}</>;
}