import Link from "next/link";
import { sanityFetchArray } from "@/sanity/fetch";
import { getLatestBlogsQuery } from "@/sanity/queries";
import { Blog } from "@/types";
import { BlogCard } from "./BlogCard";

export async function FeaturedInsights() {
    const blogs = await sanityFetchArray<Blog>(getLatestBlogsQuery);

    if (blogs.length === 0) {
        return null;
    }

    return (
        <section className="section" style={{ backgroundColor: "var(--color-surface)" }}>
            <div className="container">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "var(--spacing-8)" }}>
                    <h2>Latest Insights</h2>
                    <Link href="/insights" style={{ color: "var(--color-accent-teal)", fontWeight: "600" }}>Read All Insights →</Link>
                </div>
                <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
                    {blogs.map((blog) => (
                        <BlogCard key={blog._id} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
}
