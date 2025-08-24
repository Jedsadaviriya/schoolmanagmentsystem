// In-memory storage for grades (shared across endpoints)
let grades = [];

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    // Validate the ID format
    if (!id) {
      return Response.json(
        {
          success: false,
          error: "Ungültige ID",
        },
        { status: 400 }
      );
    }

    // Log the ID being deleted for debugging
    console.log(`Attempting to delete grade with ID: ${id}`);

    // Find the index of the grade with the given ID
    const initialLength = grades.length;
    grades = grades.filter((grade) => grade._id !== id);

    if (grades.length === initialLength) {
      return Response.json(
        {
          success: false,
          error: "Note nicht gefunden",
        },
        { status: 404 }
      );
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Delete grade error:", error);

    return Response.json(
      {
        success: false,
        error: "Fehler beim Löschen der Note",
      },
      { status: 500 }
    );
  }
}
