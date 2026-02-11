import { sanityFetch } from "@/sanity/fetch";
import { getEventBySlugQuery } from "@/sanity/queries";
import { Event } from "@/types";
import { RegisterButton } from "@/components/RegisterButton";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/client"; // Import client for generateStaticParams
import { PortableText } from "@/components/CustomPortableText";

export const revalidate = 60;

export async function generateStaticParams() {
    const events = await client.fetch(`
    *[_type == "event" && defined(slug.current)]{
      "slug": slug.current
    }
  `);

    return events.map((event: any) => ({
        slug: event.slug,
    }));
}

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function EventDetailPage(props: Props) {
    const params = await props.params;
    const event = await sanityFetch<Event>(getEventBySlugQuery, { slug: params.slug });

    if (!event) {
        notFound();
    }

    const isUpcoming = event.status === "Upcoming";

    return (
        <div className="section">
            <div className="container" style={{ maxWidth: "800px" }}>

                <header style={{ marginBottom: "var(--spacing-8)", textAlign: "center" }}>
                    <span style={{
                        display: "inline-block",
                        padding: "4px 12px",
                        backgroundColor: event.mode === "Online" ? "var(--color-accent-teal)" : "var(--color-accent)",
                        color: "#fff",
                        borderRadius: "4px",
                        fontWeight: "600",
                        marginBottom: "var(--spacing-4)"
                    }}>
                        {event.mode}
                    </span>
                    <h1 style={{ fontSize: "2.5rem", marginBottom: "var(--spacing-4)" }}>{event.title}</h1>
                    <p style={{ fontSize: "1.25rem", color: "var(--color-text-muted)", marginBottom: "var(--spacing-6)" }}>
                        {new Date(event.eventDate).toLocaleDateString(undefined, {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                        })}
                    </p>

                    {event.mainImage && (
                        <div style={{ marginBottom: "var(--spacing-8)", borderRadius: "8px", overflow: "hidden" }}>
                            {/* Use a simple img for now */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={urlFor(event.mainImage).width(800).height(450).url()}
                                alt={event.title}
                                style={{ width: "100%", height: "auto", display: "block" }}
                            />
                        </div>
                    )}
                </header>

                <div style={{
                    backgroundColor: "var(--color-surface)",
                    padding: "var(--spacing-6)",
                    borderRadius: "8px",
                    marginBottom: "var(--spacing-8)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--spacing-4)"
                }}>
                    {/* Key Details */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--spacing-4)" }}>
                        <div>
                            <strong>Status:</strong> {event.status}
                        </div>
                        <div>
                            <strong>Duration:</strong> {event.duration || "N/A"}
                        </div>
                        <div>
                            <strong>Price:</strong> {event.price === 0 ? "Free" : `₹${event.price}`}
                        </div>
                    </div>

                    {isUpcoming && event.registrationLink && (
                        <div style={{ marginTop: "var(--spacing-4)" }}>
                            <RegisterButton link={event.registrationLink} price={event.price} />
                        </div>
                    )}

                    {!isUpcoming && (
                        <div style={{ marginTop: "var(--spacing-4)", padding: "var(--spacing-4)", backgroundColor: "var(--color-border)", textAlign: "center", borderRadius: "4px" }}>
                            Event Completed.
                            {event.recordingLink && (
                                <div style={{ marginTop: "var(--spacing-2)" }}>
                                    <a href={event.recordingLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>Watch Recording</a>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="content">
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--spacing-4)" }}>Overview</h2>
                    {/* Fix: Use PortableText for description (mapped to 'overview' in the query, but wait... 
                        Looking at type def, description is SanityBody[], which is correct.
                        Wait, in getEventBySlugQuery, we fetch 'overview'. 
                        Let's check the schema. The schema says 'description' is portable text.
                        The user query maps 'description' to 'overview' in types if I recall correctly? 
                        Wait, let's look at getEventBySlugQuery in queries.ts 
                        It fetches `overview`... but schema calls it `description`.
                        I should fix the query to fetch `description` OR rename it. 
                        The schema has `defineField({ name: 'description', ... })`.
                        The query `getEventBySlugQuery` has `overview`.
                        I suspect the query is wrong based on schema.
                        I will change the component to use `event.description` via PortableText.
                    */}
                    {Array.isArray(event.description) ? (
                        <PortableText value={event.description} />
                    ) : (
                        <p>{/* Fallback if description is missing or string, though type says SanityBody[] */}</p>
                    )}

                    {event.agenda && (
                        <>
                            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--spacing-4)" }}>Agenda</h2>
                            <ul style={{ paddingLeft: "var(--spacing-6)", marginBottom: "var(--spacing-6)" }}>
                                {event.agenda.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </>
                    )}

                    {event.keyTakeaways && (
                        <>
                            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--spacing-4)" }}>Key Takeaways</h2>
                            <ul style={{ paddingLeft: "var(--spacing-6)", marginBottom: "var(--spacing-6)" }}>
                                {event.keyTakeaways.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </>
                    )}
                </div>

            </div>
        </div>
    );
}
