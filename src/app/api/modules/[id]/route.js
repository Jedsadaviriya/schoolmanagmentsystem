import { modulesDB } from "@/app/lib/indexedDB";

export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return Response.json(
        {
          success: false,
          error: "Ungültige ID",
        },
        { status: 400 }
      );
    }

    const module = await modulesDB.getById(id);

    if (!module) {
      return Response.json(
        {
          success: false,
          error: "Modul nicht gefunden",
        },
        { status: 404 }
      );
    }

    return Response.json({ success: true, module });
  } catch (error) {
    console.error("Error fetching module:", error);
    return Response.json(
      {
        success: false,
        error: error.message || "Fehler beim Laden des Moduls",
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();

    if (!id) {
      return Response.json(
        {
          success: false,
          error: "Ungültige ID",
        },
        { status: 400 }
      );
    }

    const existingModule = await modulesDB.getById(id);

    if (!existingModule) {
      return Response.json(
        {
          success: false,
          error: "Modul nicht gefunden",
        },
        { status: 404 }
      );
    }

    const updatedModule = {
      ...existingModule,
      ...body,
      _id: id,
    };

    await modulesDB.update(updatedModule);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error updating module:", error);
    return Response.json(
      {
        success: false,
        error: error.message || "Fehler beim Aktualisieren des Moduls",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return Response.json(
        {
          success: false,
          error: "Ungültige ID",
        },
        { status: 400 }
      );
    }

    await modulesDB.remove(id);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error deleting module:", error);
    return Response.json(
      {
        success: false,
        error: error.message || "Fehler beim Löschen des Moduls",
      },
      { status: 500 }
    );
  }
}
