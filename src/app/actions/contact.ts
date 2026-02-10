"use server";

import type { ContactFormData } from "@/types";

interface ActionResult {
    success: boolean;
    message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<ActionResult> {
    // Validate
    if (!data.name || !data.email || !data.message) {
        return {
            success: false,
            message: "All fields are required.",
        };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return {
            success: false,
            message: "Please provide a valid email address.",
        };
    }

    try {
        // TODO: Implement actual email/notification logic
        console.log("Server Action - Contact form:", data);

        return {
            success: true,
            message: "Thank you! Your message has been sent successfully.",
        };
    } catch {
        return {
            success: false,
            message: "Something went wrong. Please try again.",
        };
    }
}
