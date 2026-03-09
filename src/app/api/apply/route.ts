import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, position, portfolio, message } = data;

    if (!name || !email || !position || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const accessKey = process.env.WEB3FORMS_KEY;
    if (!accessKey) {
      return NextResponse.json({ error: "Form service not configured" }, { status: 500 });
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Application: ${position} — ${name}`,
        from_name: "ADW Careers",
        name,
        email,
        phone: phone || "Not provided",
        position,
        portfolio: portfolio || "Not provided",
        message,
      }),
    });

    const text = await res.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch {
      console.error("Web3Forms response:", text.substring(0, 500));
      throw new Error("Invalid response from form service");
    }

    if (!result.success) throw new Error(result.message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Apply API error:", error);
    return NextResponse.json({ error: "Failed to send application" }, { status: 500 });
  }
}
