"use client";
import { createContext, useEffect, useRef } from "react";
import Lenis from "lenis";

interface LenisOptions {
    duration?: number;
    easing?: (t: number) => number;
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    infinite?: boolean;
    anchors?: boolean;
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
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        anchors: true,
        smoothWheel: true,  // Оставь true для wheel, но отключай при drag
    }
}: {
    children: React.ReactNode;
    options?: Partial<LenisOptions>;
}) {
    const lenisRef = useRef<LenisInstance | null>(null);
    const rafRef = useRef<number>(0);
    const isScrollbarDragging = useRef(false);

    useEffect(() => {
        const lenis = new Lenis(options) as LenisInstance;
        lenisRef.current = lenis;

        // Детекция драггинга скроллбара (mousedown/mousemove/mouseup на document)
        const handleMouseDown = () => {
            isScrollbarDragging.current = true;
            if (lenis.stop) lenis.stop();  // Пауза Lenis
        };
        const handleMouseUp = () => {
            isScrollbarDragging.current = false;
            if (lenis.start) lenis.start();  // Возобновление
        };

        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        // Опционально: mousemove для точности, но может быть overhead

        const raf = (time: number) => {
            if (lenisRef.current && !isScrollbarDragging.current) {
                lenis.raf(time);
            }
            rafRef.current = requestAnimationFrame(raf);
        };
        rafRef.current = requestAnimationFrame(raf);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, [options]);

    return (
        <LenisContext.Provider value={lenisRef.current}>
            {children}
        </LenisContext.Provider>
    );
}