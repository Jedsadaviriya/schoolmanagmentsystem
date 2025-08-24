import { NextResponse } from "next/server";

let modules = [];

export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Ungültige ID" },
        { status: 400 }
      );
    }

    const module = modules.find((m) => m._id === id);

    if (!module) {
      return NextResponse.json(
        { success: false, error: "Modul nicht gefunden" },
        { status: 404 }
      );
    }

    const serializedModule = { ...module, _id: module._id.toString() };

    return NextResponse.json({ success: true, modules: serializedModule });
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

    const moduleIndex = modules.findIndex((m) => m._id === id);

    if (moduleIndex === -1) {
      return NextResponse.json(
        { success: false, error: "Modul nicht gefunden" },
        { status: 404 }
      );
    }

    const existingModule = modules[moduleIndex];
    const updatedModule = {
      ...existingModule,
      ...body,
      _id: id,
      events: existingModule.events,
    };

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

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Ungültige ID" },
        { status: 400 }
      );
    }

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
