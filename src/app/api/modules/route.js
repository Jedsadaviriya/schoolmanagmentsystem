import { NextResponse } from "next/server";
import { modules, generateId } from "../../lib/store";

// GET: Fetch all modules
export async function GET() {
  try {
    return NextResponse.json({ success: true, modules });
  } catch (error) {
    console.error("Error fetching modules:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Laden der Module" },
      { status: 500 }
    );
  }
}

// POST: Create a new module
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
      _id: generateId(),
      title,
      module_number,
      description: description || "",
      instructor: instructor || "",
      semester: semester || "",
      credits: credits || "",
      status: status || "Aktiv",
      events: [],
    };

    modules.push(newModule);

    return NextResponse.json(
      { success: true, id: newModule._id },
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
