import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
    return (
        <header style={{ borderBottom: "1px solid var(--color-border)" }}>
            <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "var(--header-height)" }}>
                {/* Logo */}
                <Link href="/" style={{ fontSize: "1.5rem", fontFamily: "var(--font-serif)", fontWeight: "bold" }}>
                    Gurugram Investors Club
                </Link>

                {/* Navigation */}
                <nav style={{ display: "flex", gap: "var(--spacing-4)", alignItems: "center" }}>
                    <Link href="/about" className="nav-link">About</Link>
                    <Link href="/insights" className="nav-link">Insights</Link>
                    <Link href="/events" className="nav-link">Events</Link>
                    <Link href="/contact" className="nav-link">Contact</Link>

                    <div style={{ marginLeft: "var(--spacing-2)", paddingLeft: "var(--spacing-2)", borderLeft: "1px solid var(--color-border)" }}>
                        <ThemeToggle />
                    </div>
                </nav>
            </div>
        </header>
    );
}
