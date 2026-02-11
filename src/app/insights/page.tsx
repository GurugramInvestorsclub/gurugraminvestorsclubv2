import { sanityFetchArray } from "@/sanity/fetch";
import { getAllBlogsQuery } from "@/sanity/queries";
import { Blog } from "@/types";
import { BlogCard } from "@/components/BlogCard";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function InsightsPage() {
    const blogs = await sanityFetchArray<Blog>(getAllBlogsQuery);

    return (
        <div className="section">
            <div className="container">
                <h1 style={{ marginBottom: "var(--spacing-8)", textAlign: "center" }}>Insights</h1>
                <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
                    {blogs.map((blog) => (
                        <BlogCard key={blog._id} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
}
