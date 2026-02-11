import { sanityFetch } from "@/sanity/fetch";
import { getBlogBySlugQuery, getAllBlogsQuery } from "@/sanity/queries";
import { Blog } from "@/types";
import { PortableText } from "@/components/CustomPortableText";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/client"; // Import client for generateStaticParams

export const revalidate = 60;

// Improve generateStaticParams to fix 404s
export async function generateStaticParams() {
    const posts = await client.fetch(`
    *[_type == "post" && defined(slug.current)]{
      "slug": slug.current
    }
  `);

    return posts.map((post: any) => ({
        slug: post.slug,
    }));
}

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function InsightDetailPage(props: Props) {
    const params = await props.params;
    const blog = await sanityFetch<Blog>(getBlogBySlugQuery, { slug: params.slug });

    if (!blog) {
        notFound();
    }

    return (
        <article className="section">
            <div className="container" style={{ maxWidth: "800px" }}>
                <header style={{ marginBottom: "var(--spacing-8)", textAlign: "center" }}>
                    <h1 style={{ fontSize: "3rem", marginBottom: "var(--spacing-4)" }}>{blog.title}</h1>
                    <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--spacing-6)" }}>
                        Published on {new Date(blog.publishedAt).toLocaleDateString()}
                    </p>
                    {blog.mainImage && (
                        <div style={{ marginBottom: "var(--spacing-8)", borderRadius: "8px", overflow: "hidden" }}>
                            {/* Use a simple img for now, waiting for next/image optimization setup */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={urlFor(blog.mainImage).width(800).height(500).url()}
                                alt={blog.title}
                                style={{ width: "100%", height: "auto", display: "block" }}
                            />
                        </div>
                    )}
                </header>


                <div className="content" style={{ fontSize: "1.125rem" }}>
                    {blog.body && <PortableText value={blog.body} />}
                </div>
            </div>
        </article>
    );
}
