import { PortableText as PortableTextReact } from "@portabletext/react";

const components = {
    block: {
        h1: ({ children }: any) => <h1 style={{ fontSize: "2.5rem", marginTop: "var(--spacing-8)", marginBottom: "var(--spacing-4)" }}>{children}</h1>,
        h2: ({ children }: any) => <h2 style={{ fontSize: "2rem", marginTop: "var(--spacing-6)", marginBottom: "var(--spacing-4)" }}>{children}</h2>,
        h3: ({ children }: any) => <h3 style={{ fontSize: "1.5rem", marginTop: "var(--spacing-6)", marginBottom: "var(--spacing-4)" }}>{children}</h3>,
        normal: ({ children }: any) => <p style={{ marginBottom: "var(--spacing-4)", lineHeight: "1.8" }}>{children}</p>,
    },
    list: {
        bullet: ({ children }: any) => <ul style={{ paddingLeft: "var(--spacing-6)", marginBottom: "var(--spacing-4)" }}>{children}</ul>,
        number: ({ children }: any) => <ol style={{ paddingLeft: "var(--spacing-6)", marginBottom: "var(--spacing-4)" }}>{children}</ol>,
    },
};

export function PortableText({ value }: { value: any }) {
    return <PortableTextReact value={value} components={components} />;
}
