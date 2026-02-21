
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode,
    variant?: "default" | "outline" | "light" | "skew",
    size?: "xs" | "md" | "lg" | "xl"
}

export default function Button({ children, variant, size, className = '', ...props }: ButtonProps) {
    return (
        <button className={`${className} btn btn-${variant ?? 'default'} btn-${size ?? 'md'}`} {...props}>
            {children}
        </button>
    )
}