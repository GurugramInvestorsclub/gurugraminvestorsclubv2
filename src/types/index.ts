export interface SanityBody {
    _key: string;
    _type: string;
    children: {
        _key: string;
        _type: string;
        text: string;
        marks: string[];
    }[];
    markDefs: {
        _key: string;
        _type: string;
        href: string;
    }[];
    style: string;
}

export interface SanityImage {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface Blog {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    mainImage?: SanityImage;
    excerpt?: string;
    body?: SanityBody[];
}

export interface Event {
    _id: string;
    title: string;
    slug: { current: string };
    eventDate: string;
    mode: "Online" | "Offline";
    price?: number;
    description: SanityBody[];
    duration?: string;
    featured?: boolean;
    status: "Upcoming" | "Completed";
    overview?: string;
    agenda?: string[];
    keyTakeaways?: string[];
    targetAudience?: string[];
    registrationLink?: string;
    recordingLink?: string;
    mainImage?: SanityImage;
}
