export function Testimonials() {
    const testimonials = [
        { name: "Arjun Verma", role: "Long-term Investor", quote: "The clarity of thought and depth of analysis at GIC is unmatched. Use the events to network, trust me it works." },
        { name: "Priya Sharma", role: "Beginner", quote: "I was intimidated by the stock market, but the structured events helped me build a solid foundation." },
        { name: "Rohan Gupta", role: "Trader", quote: "The community here is serious about wealth creation. No noise, just signal." },
    ];

    return (
        <section className="section">
            <div className="container">
                <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-8)" }}>What Our Members Say</h2>
                <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                    {testimonials.map((t, i) => (
                        <div key={i} style={{ padding: "var(--spacing-6)", border: "1px solid var(--color-border)", borderRadius: "8px", fontStyle: "italic" }}>
                            <p style={{ marginBottom: "var(--spacing-4)" }}>"{t.quote}"</p>
                            <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-2)" }}>
                                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-secondary)" }}></div>
                                <div>
                                    <p style={{ fontWeight: "bold", margin: 0, fontStyle: "normal" }}>{t.name}</p>
                                    <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", margin: 0, fontStyle: "normal" }}>{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
