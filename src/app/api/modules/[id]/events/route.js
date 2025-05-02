import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";

// POST - Create a new event
export async function POST(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();

    if (!data.title || !data.date) {
      return NextResponse.json(
        { success: false, error: "Titel und Datum sind erforderlich" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();

    // Create event with a unique ID
    const event = {
      _id: new ObjectId().toString(),
      title: data.title,
      date: data.date,
      description: data.description || "",
    };

    const result = await db
      .collection("modules")
      .updateOne({ _id: new ObjectId(id) }, { $push: { events: event } });

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, error: "Modul nicht gefunden" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, event });
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json(
      { success: false, error: "Interner Serverfehler" },
      { status: 500 }
    );
  }
}
