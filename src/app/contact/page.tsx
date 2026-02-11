export default function ContactPage() {
    return (
        <div className="section">
            <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
                <h1 style={{ marginBottom: "var(--spacing-8)" }}>Contact Us</h1>
                <p className="lead" style={{ fontSize: "1.25rem", color: "var(--color-text-muted)", marginBottom: "var(--spacing-8)" }}>
                    Have questions about our events, membership, or investment philosophy? We'd love to hear from you.
                </p>

                <div style={{
                    display: "grid",
                    gap: "var(--spacing-6)",
                    backgroundColor: "var(--color-surface)",
                    padding: "var(--spacing-8)",
                    borderRadius: "12px",
                    border: "1px solid var(--color-border)"
                }}>
                    <div>
                        <h3 style={{ fontSize: "1.5rem", marginBottom: "var(--spacing-2)" }}>Email Us</h3>
                        <p>
                            <a href="mailto:hello@gurugraminvestorsclub.com" style={{ color: "var(--color-accent-teal)", fontSize: "1.25rem", fontWeight: "600" }}>
                                hello@gurugraminvestorsclub.com
                            </a>
                        </p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: "1.5rem", marginBottom: "var(--spacing-2)" }}>Follow Us</h3>
                        <div style={{ display: "flex", gap: "var(--spacing-4)", justifyContent: "center" }}>
                            <a href="#" className="btn btn-secondary">LinkedIn</a>
                            <a href="#" className="btn btn-secondary">Twitter</a>
                            <a href="#" className="btn btn-secondary">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
