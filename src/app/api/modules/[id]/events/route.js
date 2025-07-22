import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";


// GET: Fetch all events for a module
export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: "Ungültige Modul-ID" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const module = await db
      .collection("modules")
      .findOne({ _id: new ObjectId(id) }, { projection: { events: 1 } });

    if (!module) {
      return NextResponse.json(
        { success: false, error: "Modul nicht gefunden" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, events: module.events || [] });
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

    if (!ObjectId.isValid(id)) {
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

    const { db } = await connectToDatabase();

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
      { success: false, error: "Fehler beim Erstellen des Ereignisses" },
      { status: 500 }
    );
  }
}
