// components/LenisProvider.tsx
"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

// Импортируем тип опций (если нужно строго типизировать)
import type { LenisOptions } from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
    // ✅ Используем useRef, а не useState
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // ✅ Опции можно типизировать через Partial<LenisOptions>
        const options = {
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothTouch: true,
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