import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.API_URL;
const EVENT_ID = 4;

export async function GET() {
    try {
        const res = await fetch(`${BACKEND_URL}/api/settings/whatsapp/${EVENT_ID}`, {
            cache: 'no-store',
            headers: {
                'Accept': 'application/json',
            }
        });

        if (!res.ok) {
            return NextResponse.json({ message: "" });
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Fetch error:", error);
        return NextResponse.json({ error: 'Failed to read message from backend' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const { message } = await request.json();

        const res = await fetch(`${BACKEND_URL}/api/settings/whatsapp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                id_evento: EVENT_ID,
                message: message
            })
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            throw new Error(errorData.message || 'Backend save failed');
        }

        return NextResponse.json({ success: true, message: 'Message updated successfully in database' });
    } catch (error) {
        console.error("Save error:", error);
        return NextResponse.json({
            error: 'Failed to save message',
            details: error.message
        }, { status: 500 });
    }
}
