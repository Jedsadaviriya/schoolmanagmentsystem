import { NextResponse } from "next/server";
import { modules, generateId } from "../../../../lib/store";

// GET: Fetch all events for a module
export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Ungültige Modul-ID" },
        { status: 400 }
      );
    }

    const foundModule = modules.find((m) => m._id === id);

    if (!foundModule) {
      return NextResponse.json(
        { success: false, error: "Modul nicht gefunden" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      events: foundModule.events || [],
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Laden der Ereignisse" },
      { status: 500 }
    );
  }
}

// POST: Create a new event for a module
export async function POST(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Ungültige Modul-ID" },
        { status: 400 }
      );
    }

    if (!data.title || !data.date) {
      return NextResponse.json(
        { success: false, error: "Titel und Datum sind erforderlich" },
        { status: 400 }
      );
    }

    const foundModule = modules.find((m) => m._id === id);

    if (!foundModule) {
      return NextResponse.json(
        { success: false, error: "Modul nicht gefunden" },
        { status: 404 }
      );
    }

    const event = {
      _id: generateId(),
      title: data.title,
      date: data.date,
      description: data.description || "",
    };

    foundModule.events = foundModule.events || [];
    foundModule.events.push(event);

    return NextResponse.json({ success: true, event });
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Erstellen des Ereignisses" },
      { status: 500 }
    );
  }
}
