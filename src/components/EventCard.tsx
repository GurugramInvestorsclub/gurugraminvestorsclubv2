import Link from "next/link";
import { Event } from "@/types";
import { PortableText } from "@/components/CustomPortableText";
import { urlFor } from "@/sanity/lib/image";

export function EventCard({ event }: { event: Event }) {
    const date = new Date(event.eventDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div style={{
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
            padding: "var(--spacing-4)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            backgroundColor: "var(--color-surface)"
        }}>
            {event.mainImage && (
                <div style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16/9",
                    overflow: "hidden",
                    marginBottom: "var(--spacing-4)",
                    borderRadius: "4px"
                }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={urlFor(event.mainImage).width(800).height(450).url()}
                        alt={event.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
            )}
            <div>
                <span style={{
                    display: "inline-block",
                    padding: "4px 8px",
                    backgroundColor: event.mode === "Online" ? "var(--color-accent-teal)" : "var(--color-accent)",
                    color: "#fff",
                    borderRadius: "4px",
                    fontSize: "0.875rem",
                    marginBottom: "var(--spacing-2)"
                }}>
                    {event.mode}
                </span>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "var(--spacing-2)" }}>{event.title}</h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", marginBottom: "var(--spacing-2)" }}>{date}</p>
                <div style={{ marginBottom: "var(--spacing-4)", maxHeight: "150px", overflow: "hidden" }}>
                    {event.description && <PortableText value={event.description} />}
                </div>
                <p style={{ fontWeight: "bold", marginBottom: "var(--spacing-4)" }}>
                    {event.price === 0 ? "Free" : (event.price ? `₹${event.price}` : "Price TBD")}
                </p>
            </div>
            <Link href={`/events/${event.slug.current}`} className="btn btn-secondary" style={{ width: "100%" }}>
                View Details
            </Link>
        </div>
    );
}
