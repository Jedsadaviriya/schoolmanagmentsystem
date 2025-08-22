// File: app/api/modules/[id]/events/[eventId]/route.js
import { NextResponse } from "next/server";
import { connectToDatabase } from "../.././../../../lib/mongodb";
import { ObjectId } from "mongodb";

// GET: Fetch a specific event by ID
export async function GET(request, { params }) {
  try {
    const { id, eventId } = params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: "Ungültige Modul-ID" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const modules = await db
      .collection("modules")
      .findOne(
        { _id: new ObjectId(id), "events._id": eventId },
        { projection: { "events.$": 1 } }
      );

    if (!modules || !modules.events || modules.events.length === 0) {
      return NextResponse.json(
        { success: false, error: "Ereignis nicht gefunden" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, event: modules.events[0] });
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

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: "Ungültige Modul-ID" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();

    const updateFields = {};
    if (data.title) updateFields["events.$.title"] = data.title;
    if (data.date) updateFields["events.$.date"] = data.date;
    if (data.description !== undefined)
      updateFields["events.$.description"] = data.description;

    const result = await db
      .collection("modules")
      .updateOne(
        { _id: new ObjectId(id), "events._id": eventId },
        { $set: updateFields }
      );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, error: "Ereignis oder Modul nicht gefunden" },

        { status: 404 }
      );
    }

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
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: "Ungültige Modul-ID" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();

    const result = await db
      .collection("modules")
      .updateOne(
        { _id: new ObjectId(id) },
        { $pull: { events: { _id: eventId } } }
      );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, error: "Modul nicht gefunden" },
        { status: 404 }
      );
    }

    if (result.modifiedCount === 0) {
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
