"use client";
import { createContext, useEffect } from "react";
import Lenis from "lenis";

const LenisContext = createContext<typeof Lenis | null>(null);

export function LenisProvider({
    children,
    options = {
        duration: 2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    }
}: {
    children: React.ReactNode;
    options?: any;
}) {
    useEffect(() => {
        const lenis = new Lenis(options);

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
