import { sanityFetchArray } from "@/sanity/fetch";
import { getUpcomingEventsQuery, getPastEventsQuery } from "@/sanity/queries";
import { Event } from "@/types";
import { EventListing } from "@/components/EventListing";

export const revalidate = 60;

export default async function EventsPage() {
    const upcomingEvents = await sanityFetchArray<Event>(getUpcomingEventsQuery);
    const pastEvents = await sanityFetchArray<Event>(getPastEventsQuery);

    return (
        <div className="section">
            <div className="container">
                <h1 style={{ marginBottom: "var(--spacing-8)", textAlign: "center" }}>Events</h1>
                <EventListing upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
            </div>
        </div>
    );
}
