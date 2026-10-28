import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.fullName || !data.phone || !data.email) {
      return NextResponse.json(
        { success: false, message: "Missing required contact details." },
        { status: 400 }
      );
    }

    console.log("New RMR Roofing Enquiry Received:", {
      fullName: data.fullName,
      phone: data.phone,
      email: data.email,
      suburb: data.suburb,
      services: data.services,
      description: data.description,
      receivedAt: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry successfully logged. Rhys McRae will contact you shortly."
    });
  } catch (error) {
    console.error("Quote submission error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error processing enquiry." },
      { status: 500 }
    );
  }
}
