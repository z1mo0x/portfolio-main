'use client'

import { usePathname } from 'next/navigation'

export default function useIsMain() {
    const pathname = usePathname()
    return pathname === '/'
}