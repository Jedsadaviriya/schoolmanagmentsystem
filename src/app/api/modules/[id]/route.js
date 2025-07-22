import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// GET: Fetch a single module by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: "Ungültige ID" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const module = await db
      .collection("modules")
      .findOne({ _id: new ObjectId(id) });

    if (!module) {
      return NextResponse.json(
        { success: false, error: "Modul nicht gefunden" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, module });
  } catch (error) {
    console.error("Error fetching module:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Laden des Moduls" },
      { status: 500 }
    );
  }
}

// PUT: Update a module by ID
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: "Ungültige ID" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const existingModule = await db
      .collection("modules")
      .findOne({ _id: new ObjectId(id) });

    if (!existingModule) {
      return NextResponse.json(
        { success: false, error: "Modul nicht gefunden" },
        { status: 404 }
      );
    }

    const updatedModule = {
      ...existingModule,
      ...body,
      _id: new ObjectId(id),
      events: existingModule.events, // Preserve events array
    };

    await db
      .collection("modules")
      .updateOne({ _id: new ObjectId(id) }, { $set: updatedModule });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating module:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Aktualisieren des Moduls" },
      { status: 500 }
    );
  }
}

// DELETE: Delete a module by ID
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: "Ungültige ID" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const result = await db
      .collection("modules")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, error: "Modul nicht gefunden" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting module:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Löschen des Moduls" },
      { status: 500 }
    );
  }
}
