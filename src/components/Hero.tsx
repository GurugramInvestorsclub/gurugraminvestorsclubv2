import Link from "next/link";

export function Hero() {
    return (
        <section className="section" style={{ textAlign: "center", paddingBottom: "var(--spacing-12)" }}>
            <div className="container">
                <h1 style={{ maxWidth: "800px", margin: "0 auto var(--spacing-4)" }}>
                    Master the Art of <span style={{ color: "var(--color-accent)" }}>Value Investing</span>
                </h1>
                <p style={{ fontSize: "1.25rem", color: "var(--color-text-muted)", maxWidth: "600px", margin: "0 auto var(--spacing-8)" }}>
                    Join the Gurugram Investors Club to navigate the markets with confidence, discipline, and community.
                </p>
                <div style={{ display: "flex", gap: "var(--spacing-4)", justifyContent: "center" }}>
                    <Link href="/events" className="btn btn-primary">
                        Explore Events
                    </Link>
                    <Link href="/insights" className="btn btn-secondary">
                        Read Insights
                    </Link>
                </div>
            </div>
        </section>
    );
}
