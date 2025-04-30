import { connectToDatabase } from "../../../lib/mongodb"
import { ObjectId } from "mongodb"

export async function DELETE(request, { params }) {
  try {
    const { id } = params

    // Validate the ID format before attempting to create an ObjectId
    if (!id || id.length !== 24) {
      return Response.json(
        {
          success: false,
          error: "Ungültige ID",
        },
        { status: 400 },
      )
    }

    const { db } = await connectToDatabase()

    // Ensure the database connection is established
    if (!db) {
      console.error("Database connection failed")
      return Response.json(
        {
          success: false,
          error: "Datenbankverbindung fehlgeschlagen",
        },
        { status: 500 },
      )
    }

    // Log the ID being deleted for debugging
    console.log(`Attempting to delete grade with ID: ${id}`)

    const result = await db.collection("grades").deleteOne({
      _id: new ObjectId(id),
    })

    console.log("Delete result:", result)

    if (result.deletedCount === 0) {
      return Response.json(
        {
          success: false,
          error: "Note nicht gefunden",
        },
        { status: 404 },
      )
    }

    return Response.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Delete grade error:", error)
    return Response.json(
      {
        success: false,
        error: "Fehler beim Löschen der Note",
      },
      { status: 500 },
    )
  }
}
