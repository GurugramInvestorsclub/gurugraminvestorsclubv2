import { client } from "./client";

export async function sanityFetch<T>(query: string, params: Record<string, any> = {}): Promise<T | null> {
    try {
        return await client.fetch(query, params);
    } catch (error) {
        console.warn("Error fetching data from Sanity:", error);
        return null;
    }
}

export async function sanityFetchArray<T>(query: string, params: Record<string, any> = {}): Promise<T[]> {
    try {
        return await client.fetch(query, params);
    } catch (error) {
        console.warn("Error fetching data from Sanity:", error);
        return [];
    }
}
