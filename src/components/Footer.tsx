export function Footer() {
    return (
        <footer style={{ borderTop: "1px solid var(--color-border)", padding: "var(--spacing-6) 0", marginTop: "var(--spacing-8)" }}>
            <div className="container" style={{ textAlign: "center", color: "var(--color-text-muted)" }}>
                <p>&copy; {new Date().getFullYear()} Gurugram Investors Club. All rights reserved.</p>
            </div>
        </footer>
    );
}
