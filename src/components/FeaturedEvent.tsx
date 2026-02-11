import Link from "next/link";
import { sanityFetch } from "@/sanity/fetch";
import { getFeaturedEventQuery } from "@/sanity/queries";
import { Event } from "@/types";
import { PortableText } from "@/components/CustomPortableText";
import { urlFor } from "@/sanity/lib/image";

export async function FeaturedEvent() {
    const event = await sanityFetch<Event>(getFeaturedEventQuery);

    if (!event) {
        return null;
    }

    return (
        <section className="section" style={{ backgroundColor: "var(--color-surface)" }}>
            <div className="container">
                <h2 style={{ marginBottom: "var(--spacing-6)", textAlign: "center" }}>Featured Event</h2>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "var(--spacing-8)",
                    alignItems: "center",
                    backgroundColor: "var(--color-background)",
                    padding: "var(--spacing-8)",
                    borderRadius: "12px",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                }}>
                    <div>
                        <span style={{
                            display: "inline-block",
                            padding: "4px 12px",
                            backgroundColor: "var(--color-accent)",
                            color: "#fff",
                            borderRadius: "4px",
                            fontWeight: "600",
                            marginBottom: "var(--spacing-4)"
                        }}>
                            FEATURED
                        </span>
                        <h3 style={{ fontSize: "2rem", marginBottom: "var(--spacing-4)" }}>{event.title}</h3>
                        <div style={{ fontSize: "1.1rem", marginBottom: "var(--spacing-4)", lineHeight: "1.6" }}>
                            {event.description && <PortableText value={event.description} />}
                        </div>
                        <div style={{ display: "flex", gap: "var(--spacing-4)", marginBottom: "var(--spacing-6)" }}>
                            <div>
                                <strong>Date:</strong> {new Date(event.eventDate).toLocaleDateString()}
                            </div>
                            <div>
                                <strong>Mode:</strong> {event.mode}
                            </div>
                            <div>
                                <strong>Price:</strong> {event.price === 0 ? "Free" : `₹${event.price}`}
                            </div>
                        </div>
                        <Link href={`/events/${event.slug.current}`} className="btn btn-primary">
                            View Details & Register
                        </Link>
                    </div>
                    {/* Image Rendering */}
                    <div style={{
                        backgroundColor: "var(--color-secondary)",
                        height: "300px",
                        borderRadius: "8px",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        position: "relative"
                    }}>
                        {event.mainImage ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                                src={urlFor(event.mainImage).width(600).height(400).url()}
                                alt={event.title}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        ) : (
                            <span>No Image Available</span>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
