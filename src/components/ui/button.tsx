import { ChevronDown, ChevronRight } from "lucide-react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode,
    variant?: "default" | "outline" | "light" | "skew" | "shadow" | "arrow",
    size?: "xs" | "md" | "lg" | "xl"
}

export default function Button({ children, variant, size, className = '', ...props }: ButtonProps) {
    return (
        <button
            className={`${className} btn btn-${variant ?? 'default'} btn-${size ?? 'md'}`} {...props}
        >
            {variant === "arrow" ? <ChevronRight className="mr-1" /> : ""}    {children}
        </button>
    )
}