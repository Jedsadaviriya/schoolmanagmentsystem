import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../lib/mongodb";
import { ObjectId } from "mongodb";

// PUT - Update an event
export async function PUT(request, { params }) {
  try {
    const { id, eventId } = params;
    const data = await request.json();

    if (!data.title || !data.date) {
      return NextResponse.json(
        { success: false, error: "Titel und Datum sind erforderlich" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();

    const result = await db.collection("modules").updateOne(
      { _id: new ObjectId(id), "events._id": eventId },
      {
        $set: {
          "events.$.title": data.title,
          "events.$.date": data.date,
          "events.$.description": data.description || "",
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, error: "Modul oder Termin nicht gefunden" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating event:", error);
    return NextResponse.json(
      { success: false, error: "Interner Serverfehler" },
      { status: 500 }
    );
  }
}

// DELETE - Delete an event
export async function DELETE(request, { params }) {
  try {
    const { id, eventId } = params;

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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting event:", error);
    return NextResponse.json(
      { success: false, error: "Interner Serverfehler" },
      { status: 500 }
    );
  }
}
