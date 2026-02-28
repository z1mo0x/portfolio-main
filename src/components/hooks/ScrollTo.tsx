"use client";

import { useContext } from "react";
import { LenisContext } from "@/providers/lenis-provider";

export function useScrollTo() {
    const lenis = useContext(LenisContext);

    return (target: string | HTMLElement, options = {}) => {
        const el =
            typeof target === "string"
                ? document.querySelector<HTMLElement>(target)
                : target;

        if (!el || !lenis) return;

        lenis.scrollTo(el, {
            offset: 0,
            duration: 1.5,
            ...options,
        });
    };
}
