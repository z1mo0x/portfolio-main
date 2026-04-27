'use client'

import { useEffect, useState } from 'react'

export default function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState<boolean>(false)

    useEffect(() => {
        const media = window.matchMedia("(min-width:1280px)");
        const onChange = () => setIsDesktop(media.matches);

        onChange()

        media.addEventListener('change', onChange);

        return () => media.removeEventListener('change', onChange)
    }, [])

    return isDesktop;
}