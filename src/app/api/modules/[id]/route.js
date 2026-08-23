import { NextResponse } from "next/server";
import { modules } from "../../../lib/store";

// GET: Fetch a single module by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Ungültige ID" },
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

    return NextResponse.json({ success: true, modules: foundModule });
  } catch (error) {
    console.error("Error fetching module:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Laden des Moduls" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Ungültige ID" },
        { status: 400 }
      );
    }

    const index = modules.findIndex((m) => m._id === id);

    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "Modul nicht gefunden" },
        { status: 404 }
      );
    }

    const existingModule = modules[index];
    const updatedModule = {
      ...existingModule,
      ...body,
      _id: id,
      events: existingModule.events, // Preserve events array
    };

    modules[index] = updatedModule;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating module:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Aktualisieren des Moduls" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Ungültige ID" },
        { status: 400 }
      );
    }

    const index = modules.findIndex((m) => m._id === id);

    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "Modul nicht gefunden" },
        { status: 404 }
      );
    }

    modules.splice(index, 1);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting module:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Löschen des Moduls" },
      { status: 500 }
    );
  }
}
