import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/app/data/whatsappMessage.json');

export async function GET() {
    try {
        if (!fs.existsSync(filePath)) {
            return NextResponse.json({ message: "" });
        }
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContent);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to read message' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const { message } = await request.json();
        const data = { message };

        // Ensure directory exists
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        return NextResponse.json({ success: true, message: 'Message updated successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
    }
}
