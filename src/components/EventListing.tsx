"use client";

import { useState } from "react";
import { Event } from "@/types";
import { EventCard } from "./EventCard";

interface Props {
    upcomingEvents: Event[];
    pastEvents: Event[];
}

export function EventListing({ upcomingEvents, pastEvents }: Props) {
    const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

    return (
        <div>
            <div style={{ display: "flex", gap: "var(--spacing-4)", marginBottom: "var(--spacing-6)", borderBottom: "1px solid var(--color-border)" }}>
                <button
                    onClick={() => setActiveTab("upcoming")}
                    style={{
                        padding: "var(--spacing-2) var(--spacing-4)",
                        background: "none",
                        border: "none",
                        borderBottom: activeTab === "upcoming" ? "2px solid var(--color-accent)" : "2px solid transparent",
                        fontWeight: activeTab === "upcoming" ? "bold" : "normal",
                        cursor: "pointer",
                        fontSize: "1.1rem"
                    }}
                >
                    Upcoming
                </button>
                <button
                    onClick={() => setActiveTab("past")}
                    style={{
                        padding: "var(--spacing-2) var(--spacing-4)",
                        background: "none",
                        border: "none",
                        borderBottom: activeTab === "past" ? "2px solid var(--color-accent)" : "2px solid transparent",
                        fontWeight: activeTab === "past" ? "bold" : "normal",
                        cursor: "pointer",
                        fontSize: "1.1rem"
                    }}
                >
                    Past
                </button>
            </div>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "var(--spacing-8)"
            }}>
                {activeTab === "upcoming" && upcomingEvents.map(event => (
                    <EventCard key={event._id} event={event} />
                ))}
                {activeTab === "past" && pastEvents.map(event => (
                    <EventCard key={event._id} event={event} />
                ))}
            </div>

            {activeTab === "upcoming" && upcomingEvents.length === 0 && (
                <p style={{ textAlign: "center", fontStyle: "italic", color: "var(--color-text-muted)" }}>No upcoming events scheduled at the moment.</p>
            )}
            {activeTab === "past" && pastEvents.length === 0 && (
                <p style={{ textAlign: "center", fontStyle: "italic", color: "var(--color-text-muted)" }}>No past events found.</p>
            )}
        </div>
    );
}
