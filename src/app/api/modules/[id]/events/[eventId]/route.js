import { NextResponse } from "next/server";

let modules = [];

export async function GET(request, { params }) {
  try {
    const { id, eventId } = params;

    if (!id || !eventId) {
      return NextResponse.json(
        { success: false, error: "Ungültige Modul-ID oder Ereignis-ID" },
        { status: 400 }
      );
    }

    const module = modules.find((m) => m._id === id);

    if (!module || !module.events) {
      return NextResponse.json(
        { success: false, error: "Modul oder Ereignis nicht gefunden" },
        { status: 404 }
      );
    }

    const event = module.events.find((e) => e._id === eventId);

    if (!event) {
      return NextResponse.json(
        { success: false, error: "Ereignis nicht gefunden" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, event });
  } catch (error) {
    console.error("Error fetching event:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Laden des Ereignisses" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id, eventId } = params;
    const data = await request.json();

    if (!id || !eventId) {
      return NextResponse.json(
        { success: false, error: "Ungültige Modul-ID oder Ereignis-ID" },
        { status: 400 }
      );
    }

    const moduleIndex = modules.findIndex((m) => m._id === id);

    if (moduleIndex === -1 || !modules[moduleIndex].events) {
      return NextResponse.json(
        { success: false, error: "Modul oder Ereignis nicht gefunden" },
        { status: 404 }
      );
    }

    const eventIndex = modules[moduleIndex].events.findIndex(
      (e) => e._id === eventId
    );

    if (eventIndex === -1) {
      return NextResponse.json(
        { success: false, error: "Ereignis nicht gefunden" },
        { status: 404 }
      );
    }

    const updatedEvent = {
      ...modules[moduleIndex].events[eventIndex],
      ...(data.title && { title: data.title }),
      ...(data.date && { date: data.date }),
      ...(data.description !== undefined && { description: data.description }),
      _id: eventId,
    };

    modules[moduleIndex].events[eventIndex] = updatedEvent;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating event:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Aktualisieren des Ereignisses" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id, eventId } = params;

    if (!id || !eventId) {
      return NextResponse.json(
        { success: false, error: "Ungültige Modul-ID oder Ereignis-ID" },
        { status: 400 }
      );
    }

    const moduleIndex = modules.findIndex((m) => m._id === id);

    if (moduleIndex === -1 || !modules[moduleIndex].events) {
      return NextResponse.json(
        { success: false, error: "Modul nicht gefunden" },
        { status: 404 }
      );
    }

    const initialLength = modules[moduleIndex].events.length;
    modules[moduleIndex].events = modules[moduleIndex].events.filter(
      (e) => e._id !== eventId
    );

    if (modules[moduleIndex].events.length === initialLength) {
      return NextResponse.json(
        { success: false, error: "Ereignis nicht gefunden" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting event:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Löschen des Ereignisses" },
      { status: 500 }
    );
  }
}
