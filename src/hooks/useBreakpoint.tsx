import { useEffect, useState } from 'react'

export default function useBreakpoint() {
    const [breakpoint, setBreakpoint] = useState('2xl') // всегда начинаем с дефолтного

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth
            if (w >= 1500) setBreakpoint('2xl')
            else if (w >= 1200) setBreakpoint('xl')
            else if (w >= 1024) setBreakpoint('lg')
            else if (w >= 768) setBreakpoint('md')
            else setBreakpoint('sm')
        }
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    return breakpoint
}