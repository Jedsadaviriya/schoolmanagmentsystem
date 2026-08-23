// File: app/api/modules/[id]/events/[eventId]/route.js
import { NextResponse } from "next/server";
import { modules } from "../../../../../lib/store";

// GET: Fetch a specific event by ID
export async function GET(request, { params }) {
  try {
    const { id, eventId } = params;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Ungültige Modul-ID" },
        { status: 400 }
      );
    }

    const foundModule = modules.find((m) => m._id === id);
    const event = foundModule?.events?.find((e) => e._id === eventId);

    if (!event) {
      return NextResponse.json(
        { success: false, error: "Ereignis nicht gefunden" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, event });
  } catch (error) {
    console.error("Error fetching event:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Laden des Ereignisses" },
      { status: 500 }
    );
  }
}

// PUT: Update a specific event
export async function PUT(request, { params }) {
  try {
    const { id, eventId } = params;
    const data = await request.json();

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Ungültige Modul-ID" },
        { status: 400 }
      );
    }

    const foundModule = modules.find((m) => m._id === id);
    const event = foundModule?.events?.find((e) => e._id === eventId);

    if (!event) {
      return NextResponse.json(
        { success: false, error: "Ereignis oder Modul nicht gefunden" },
        { status: 404 }
      );
    }

    if (data.title) event.title = data.title;
    if (data.date) event.date = data.date;
    if (data.description !== undefined) event.description = data.description;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating event:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Aktualisieren des Ereignisses" },
      { status: 500 }
    );
  }
}

// DELETE: Delete a specific event
export async function DELETE(request, { params }) {
  try {
    const { id, eventId } = params;

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

    const initialLength = (foundModule.events || []).length;
    foundModule.events = (foundModule.events || []).filter(
      (e) => e._id !== eventId
    );

    if (foundModule.events.length === initialLength) {
      return NextResponse.json(
        { success: false, error: "Ereignis nicht gefunden" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting event:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Löschen des Ereignisses" },
      { status: 500 }
    );
  }
}
