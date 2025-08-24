import { NextResponse } from "next/server";

// In-memory storage for modules (shared across endpoints)
let modules = [];

// GET: Fetch a single module by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;

    // Basic ID validation
    if (!id) {
      return NextResponse.json(
        { success: false, error: "Ungültige ID" },
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

    // Serialize _id to string
    const serializedModule = { ...moduleItem, _id: moduleItem._id.toString() };

    return NextResponse.json({ success: true, modules: serializedModule });
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

    // Basic ID validation
    if (!id) {
      return NextResponse.json(
        { success: false, error: "Ungültige ID" },
        { status: 400 }
      );
    }

    // Find existing module
    const moduleIndex = modules.findIndex((m) => m._id === id);

    if (moduleIndex === -1) {
      return NextResponse.json(
        { success: false, error: "Modul nicht gefunden" },
        { status: 404 }
      );
    }

    // Update module, preserving events array
    const existingModule = modules[moduleIndex];
    const updatedModule = {
      ...existingModule,
      ...body,
      _id: id,
      events: existingModule.events, // Preserve events array
    };

    // Update in-memory storage
    modules[moduleIndex] = updatedModule;

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

    // Basic ID validation
    if (!id) {
      return NextResponse.json(
        { success: false, error: "Ungültige ID" },
        { status: 400 }
      );
    }

    // Filter out the module
    const initialLength = modules.length;
    modules = modules.filter((m) => m._id !== id);

    if (modules.length === initialLength) {
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
