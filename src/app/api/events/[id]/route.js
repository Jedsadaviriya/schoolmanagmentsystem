import { NextResponse } from "next/server";
import { events } from "../../../lib/store";

// PUT: Update an event by ID
export async function PUT(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Ungültige ID" },
        { status: 400 }
      );
    }

    const data = await request.json();
    const event = events.find((e) => e._id === id);

    if (!event) {
      return NextResponse.json(
        { success: false, error: "Termin nicht gefunden" },
        { status: 404 }
      );
    }

    if (data.title !== undefined) event.title = data.title;
    if (data.description !== undefined) event.description = data.description;
    if (data.date !== undefined) event.date = data.date;
    if (data.startTime !== undefined) event.startTime = data.startTime;
    if (data.endTime !== undefined) event.endTime = data.endTime;
    if (data.type !== undefined) event.type = data.type;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating event:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Aktualisieren des Termins" },
      { status: 500 }
    );
  }
}

// DELETE: Delete an event by ID
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Ungültige ID" },
        { status: 400 }
      );
    }

    const index = events.findIndex((e) => e._id === id);

    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "Termin nicht gefunden" },
        { status: 404 }
      );
    }

    events.splice(index, 1);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting event:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Löschen des Termins" },
      { status: 500 }
    );
  }
}
