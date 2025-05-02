import { modulesDB } from "@/app/lib/indexedDB";

export async function GET() {
  try {
    const modules = await modulesDB.getAll();

    return Response.json({ success: true, modules });
  } catch (error) {
    console.error("Error fetching modules:", error);
    return Response.json(
      {
        success: false,
        error: error.message || "Fehler beim Laden der Module",
      },
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
      return Response.json(
        {
          success: false,
          error: "Titel und Modulnummer sind erforderlich",
        },
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

    const result = await modulesDB.add(newModule);

    return Response.json(
      {
        success: true,
        id: result._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating module:", error);
    return Response.json(
      {
        success: false,
        error: error.message || "Fehler beim Erstellen des Moduls",
      },
      { status: 500 }
    );
  }
}
