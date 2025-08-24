import { NextResponse } from "next/server";

// In-memory storage for modules (shared across endpoints)
let modules = [];

// Simulate ObjectId for compatibility
const generateId = () => {
  return Math.random().toString(36).substr(2, 9); // Simple ID generator
};

// GET: Fetch all events for a module
export async function GET(request, { params }) {
  try {
    const { id } = params;

    // Basic ID validation
    if (!id) {
      return NextResponse.json(
        { success: false, error: "Ungültige Modul-ID" },
        { status: 400 }
      );
    }

    // Find module in in-memory storage
    const moduleItem = modules.find((m) => m._id === id); // Renamed from module to moduleItem

    if (!moduleItem) {
      return NextResponse.json(
        { success: false, error: "Modul nicht gefunden" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      events: moduleItem.events || [],
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

    // Validate inputs
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

    // Find module in in-memory storage
    const moduleIndex = modules.findIndex((m) => m._id === id);

    if (moduleIndex === -1) {
      return NextResponse.json(
        { success: false, error: "Modul nicht gefunden" },
        { status: 404 }
      );
    }

    // Create new event
    const event = {
      _id: generateId(),
      title: data.title,
      date: data.date,
      description: data.description || "",
    };

    // Add event to module's events array
    modules[moduleIndex].events = modules[moduleIndex].events || [];
    modules[moduleIndex].events.push(event);

    return NextResponse.json({ success: true, event });
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Erstellen des Ereignisses" },
      { status: 500 }
    );
  }
}
