import { grades } from "../../../lib/store";

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return Response.json(
        { success: false, error: "Ungültige ID" },
        { status: 400 }
      );
    }

    const index = grades.findIndex((grade) => grade._id === id);

    if (index === -1) {
      return Response.json(
        { success: false, error: "Note nicht gefunden" },
        { status: 404 }
      );
    }

    grades.splice(index, 1);

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Delete grade error:", error);
    return Response.json(
      { success: false, error: "Fehler beim Löschen der Note" },
      { status: 500 }
    );
  }
}
