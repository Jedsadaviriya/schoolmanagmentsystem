
import { NextResponse } from "next/server";
import { connectToDatabase } from "../../lib/mongodb";
import { ObjectId } from "mongodb";

// GET: Fetch all modules
export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const modules = await db.collection("modules").find({}).toArray();

    return NextResponse.json({ success: true, modules });
  } catch (error) {
    console.error("Error fetching modules:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Laden der Module" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      title,
      module_number,
      description,
      instructor,
      semester,
      credits,
      status,
    } = body;

    if (!title || !module_number) {
      return NextResponse.json(
        { success: false, error: "Titel und Modulnummer sind erforderlich" },
        { status: 400 }
      );
    }

    const newModule = {
      title,
      module_number,
      description: description || "",
      instructor: instructor || "",
      semester: semester || "",
      credits: credits || "",
      status: status || "Aktiv",
      events: [],
    };


    const { db } = await connectToDatabase();
    const result = await db.collection("modules").insertOne(newModule);

    return NextResponse.json(
      { success: true, id: result.insertedId.toString() },

      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating module:", error);

    return NextResponse.json(
      { success: false, error: "Fehler beim Erstellen des Moduls" },
      { status: 500 }
    );
  }
}
