import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        // TODO: Implement actual email sending (e.g., Resend, SendGrid, Nodemailer)
        console.log("Contact form submission:", { name, email, message });

        return NextResponse.json(
            { success: true, message: "Message sent successfully!" },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { error: "Internal server error." },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json(
        { message: "Contact API is running." },
        { status: 200 }
    );
}
