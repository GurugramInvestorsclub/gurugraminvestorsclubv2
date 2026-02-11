import Link from "next/link";
import { Blog } from "@/types";
import { urlFor } from "@/sanity/lib/image";

export function BlogCard({ blog }: { blog: Blog }) {
    const date = new Date(blog.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div style={{
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            backgroundColor: "var(--color-background)"
        }}>
            {blog.mainImage && (
                <div style={{ height: "200px", overflow: "hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={urlFor(blog.mainImage).width(400).height(250).url()}
                        alt={blog.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
            )}
            <div style={{ padding: "var(--spacing-4)", flex: 1, display: "flex", flexDirection: "column" }}>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", marginBottom: "var(--spacing-1)" }}>{date}</p>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "var(--spacing-2)", marginTop: "0" }}>
                    <Link href={`/insights/${blog.slug.current}`} style={{ textDecoration: "none" }}>
                        {blog.title}
                    </Link>
                </h3>
                <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--spacing-4)", flex: 1 }}>{blog.excerpt}</p>
                <Link href={`/insights/${blog.slug.current}`} style={{ color: "var(--color-accent-teal)", fontWeight: "600", marginTop: "auto" }}>
                    Read More →
                </Link>
            </div>
        </div>
    );
}
