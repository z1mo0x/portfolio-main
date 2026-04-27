"use client";

type PrismCodeProps = {
    children: string;
    language?: 'tsx' | 'jsx' | 'js' | 'html';
    transparent?: boolean;
};

export default function PrismCode({ children, language = 'tsx', transparent = false }: PrismCodeProps) {
    const preClass = `language-tsx ${transparent ? 'prismjs-trans-bg' : ''}`.trim();
    const codeClass = 'language-tsx';

    return (
        <pre
            className={preClass}
            suppressHydrationWarning
        >
            <code className={codeClass}>
                {children}
            </code>
        </pre>
    );
}