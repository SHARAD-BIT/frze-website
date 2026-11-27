import { NextResponse } from "next/server";

const API_BASE = (process.env.FRZE_API_URL || "https://api.frzeapp.in").replace(/\/+$/, "");
const APP_KEY = process.env.FRZE_APP_KEY || "vibe_os";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      user_type?: string;
      subject?: string;
      message?: string;
    };

    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { ok: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const upstream = await fetch(`${API_BASE}/api/customer-enquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-ce-app": APP_KEY,
      },
      body: JSON.stringify({
        data: {
          name: body.name.trim(),
          email: body.email.trim(),
          phone: body.phone?.trim() || "",
          user_type: body.user_type?.trim() || "Website Visitor",
          subject: body.subject?.trim() || "FRZE Website Enquiry",
          message: body.message.trim(),
          organisation_name: "FRZE Web",
        },
      }),
    });

    if (!upstream.ok) {
      const errText = await upstream.text().catch(() => "");
      return NextResponse.json(
        {
          ok: false,
          error: `Backend returned ${upstream.status}. ${errText.slice(0, 120)}`,
        },
        { status: upstream.status }
      );
    }

    const data = await upstream.json();
    return NextResponse.json({ ok: true, data });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not reach api.frzeapp.in right now." },
      { status: 502 }
    );
  }
}
