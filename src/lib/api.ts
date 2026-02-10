/**
 * API helper functions for making requests.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

interface FetchOptions extends RequestInit {
    params?: Record<string, string>;
}

/**
 * Fetch wrapper with error handling and base URL.
 */
export async function apiFetch<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
    const { params, ...fetchOptions } = options;

    let url = `${API_BASE_URL}/api${endpoint}`;

    if (params) {
        const searchParams = new URLSearchParams(params);
        url += `?${searchParams.toString()}`;
    }

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            ...fetchOptions.headers,
        },
        ...fetchOptions,
    });

    if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
}
