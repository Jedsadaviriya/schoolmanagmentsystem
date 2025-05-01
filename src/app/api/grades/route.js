import { connectToDatabase } from "../../lib/mongodb"

export async function GET() {
  try {
    const { db } = await connectToDatabase()

    if (!db) {
      return Response.json(
        {
          success: false,
          error: "Datenbankverbindung fehlgeschlagen",
        },
        { status: 500 },
      )
    }

    const grades = await db.collection("grades").find({}).toArray()

    // Transform ObjectId to string for JSON serialization
    const serializedGrades = grades.map((grade) => ({
      ...grade,
      _id: grade._id.toString(),
    }))

    return Response.json({ success: true, grades: serializedGrades })
  } catch (error) {
    console.error("Error fetching grades:", error)

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    )
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { subject, grade, module_id } = body

    if (!subject || !grade) {
      return Response.json(
        {
          success: false,
          error: "Fach und Note sind erforderlich",
        },
        { status: 400 },
      )
    }

    const { db } = await connectToDatabase()

    if (!db) {
      return Response.json(
        {
          success: false,
          error: "Datenbankverbindung fehlgeschlagen",
        },
        { status: 500 },
      )
    }

    const newGrade = {
      subject,
      grade,
      module_id: module_id || null,
      createdAt: new Date(),
    }

    const result = await db.collection("grades").insertOne(newGrade)

    return Response.json(
      {
        success: true,
        id: result.insertedId.toString(),
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating grade:", error)

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    )
  }
}
