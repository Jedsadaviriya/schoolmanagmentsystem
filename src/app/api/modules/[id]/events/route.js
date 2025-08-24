import { NextResponse } from "next/server";

let modules = [];

const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Ungültige Modul-ID" },
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

    return NextResponse.json({ success: true, events: module.events || [] });
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Laden der Ereignisse" },
      { status: 500 }
    );
  }
}

export async function POST(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();

    if (!id) {
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

    const moduleIndex = modules.findIndex((m) => m._id === id);

    if (moduleIndex === -1) {
      return NextResponse.json(
        { success: false, error: "Modul nicht gefunden" },
        { status: 404 }
      );
    }

    const event = {
      _id: generateId(),
      title: data.title,
      date: data.date,
      description: data.description || "",
    };

    modules[moduleIndex].events = modules[moduleIndex].events || [];
    modules[moduleIndex].events.push(event);

    return NextResponse.json({ success: true, event });
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Erstellen des Ereignisses" },
      { status: 500 }
    );
  }
}
