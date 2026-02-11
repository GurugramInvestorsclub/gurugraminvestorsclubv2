import Link from "next/link";
import { sanityFetchArray } from "@/sanity/fetch";
import { getUpcomingEventsQuery } from "@/sanity/queries";
import { Event } from "@/types";
import { EventCard } from "./EventCard";

export async function UpcomingEvents() {
    const events = await sanityFetchArray<Event>(getUpcomingEventsQuery);
    // Limit to 3 for homepage
    const displayedEvents = events.slice(0, 3);

    if (displayedEvents.length === 0) {
        return null;
    }

    return (
        <section className="section">
            <div className="container">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "var(--spacing-8)" }}>
                    <h2>Upcoming Events</h2>
                    <Link href="/events" style={{ color: "var(--color-accent-teal)", fontWeight: "600" }}>View All Events →</Link>
                </div>
                <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
                    {displayedEvents.map((event) => (
                        <EventCard key={event._id} event={event} />
                    ))}
                </div>
            </div>
        </section>
    );
}
