"use client";
import { createContext, useEffect, useRef } from "react";
import Lenis from "lenis";

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
    scrollTo(
        target: number | string | HTMLElement,
        options?: {
            offset?: number;
            duration?: number;
            easing?: (t: number) => number;
            immediate?: boolean;
            lock?: boolean;
            lerp?: number;
            onStart?: () => void;
            onComplete?: () => void;
        }
    ): void;

}

export const LenisContext = createContext<LenisInstance | null>(null);

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

    const lenisRef = useRef<LenisInstance | null>(null)

    useEffect(() => {
        const lenis = new Lenis(options) as LenisInstance;
        lenisRef.current = lenis;
        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy()
            lenisRef.current = null;
        };
    }, [options]);

    return (
        <LenisContext.Provider value={lenisRef.current}>
            {children}
        </LenisContext.Provider>
    );
}
