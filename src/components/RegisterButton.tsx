"use client";

import { sendGAEvent } from "@next/third-parties/google";

interface Props {
    link: string;
    price: number;
}

export function RegisterButton({ link, price }: Props) {
    const handleClick = () => {
        sendGAEvent({ event: "event_registration_click", value: price });
    };

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="btn btn-primary"
            style={{ display: "inline-block", width: "100%", textAlign: "center", padding: "var(--spacing-3)" }}
        >
            Register Now {price > 0 ? `(₹${price})` : "(Free)"}
        </a>
    );
}
