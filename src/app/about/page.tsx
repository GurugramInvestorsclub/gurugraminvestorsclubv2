import { Philosophy } from "@/components/Philosophy";

export default function AboutPage() {
    return (
        <>
            <section className="section">
                <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
                    <h1>About Gurugram Investors Club</h1>
                    <p className="lead" style={{ fontSize: "1.25rem", color: "var(--color-text-muted)" }}>
                        We are a community of dedicated investors committed to mastering the art of wealth creation through education, discipline, and shared knowledge.
                    </p>
                </div>
            </section>

            <Philosophy />

            <section className="section">
                <div className="container" style={{ maxWidth: "800px" }}>
                    <h2>Our Story</h2>
                    <p>
                        Founded in Gurugram, we saw a gap in the market for high-quality, noise-free investment education.
                        Most communities were either too basic or filled with speculative tips.
                        We built GIC to focus on fundamental analysis and long-term value creation.
                    </p>
                    <p>
                        Our events bring together industry experts and serious learners to dissect businesses, analyze trends, and build lasting wealth.
                    </p>
                </div>
            </section>
        </>
    );
}
