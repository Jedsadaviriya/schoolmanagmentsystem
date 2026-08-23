import { NextResponse } from "next/server";
import { events, generateId } from "../../lib/store";

// GET: Fetch events, optionally filtered by date range
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    let result = events;
    if (startDate && endDate) {
      result = events.filter((e) => e.date >= startDate && e.date <= endDate);
    }

    return NextResponse.json({ success: true, events: result });
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Laden der Termine" },
      { status: 500 },
    );
  }
}

// POST: Create a new event
export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.title || !data.date) {
      return NextResponse.json(
        { success: false, error: "Titel und Datum sind erforderlich" },
        { status: 400 },
      );
    }

    const newEvent = {
      _id: generateId(),
      title: data.title,
      description: data.description || "",
      date: data.date,
      startTime: data.startTime || "",
      endTime: data.endTime || "",
      type: data.type || "other",
      createdAt: new Date(),
    };

    events.push(newEvent);

    return NextResponse.json(
      { success: true, id: newEvent._id },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Erstellen des Termins" },
      { status: 500 },
    );
  }
}
