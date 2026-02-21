"use client";
import { createContext, useEffect } from "react";
import Lenis from "lenis";

// Ручная типизация для Lenis (библиотека не имеет типов)
interface LenisOptions {
    duration?: number;
    easing?: (t: number) => number;
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    infinite?: boolean;
}

interface LenisInstance {
    raf(time: number): void;
    destroy(): void;
}

const LenisContext = createContext<LenisInstance | null>(null);

export function LenisProvider({
    children,
    options = {
        duration: 2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    }
}: {
    children: React.ReactNode;
    options?: Partial<LenisOptions>;
}) {
    useEffect(() => {
        const lenis = new Lenis(options) as LenisInstance;

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, [options]);

    return (
        <LenisContext.Provider value={null}>
            {children}
        </LenisContext.Provider>
    );
}
