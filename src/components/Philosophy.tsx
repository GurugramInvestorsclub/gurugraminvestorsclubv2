export function Philosophy() {
    const pillars = [
        { title: "Long-term Vision", description: "We believe in the power of compounding and patience." },
        { title: "Fundamental Analysis", description: "Understanding the business behind the stock ticker." },
        { title: "Risk Management", description: "Preserving capital is the first rule of investing." },
        { title: "Continuous Learning", description: "Markets evolve, and so must our knowledge." },
    ];

    return (
        <section className="section" style={{ backgroundColor: "var(--color-surface)" }}>
            <div className="container">
                <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-8)" }}>Our Philosophy</h2>
                <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
                    {pillars.map((pillar, index) => (
                        <div key={index} style={{ padding: "var(--spacing-6)", backgroundColor: "var(--color-background)", border: "1px solid var(--color-border)", borderRadius: "8px" }}>
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "var(--spacing-2)" }}>{pillar.title}</h3>
                            <p style={{ color: "var(--color-text-muted)" }}>{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
