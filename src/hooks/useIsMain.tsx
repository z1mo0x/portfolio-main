'use client'

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"

export default function useIsMain() {
    const pathname = usePathname()
    const [isMain, setIsMain] = useState<boolean>(false);

    useEffect(() => {
        setIsMain(pathname === '/')
    }, [pathname])

    return isMain;
}