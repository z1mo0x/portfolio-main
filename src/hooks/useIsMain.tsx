'use client'

import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react"

export default function useIsMain() {
    const pathname = usePathname()
    const [isMain, setIsMain] = useState<boolean>(false);

    useLayoutEffect(() => {
        setIsMain(pathname === '/')
    }, [pathname])

    console.log(isMain);


    return isMain;
}