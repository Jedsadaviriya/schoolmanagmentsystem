import { grades, generateId } from "../../lib/store"

export async function GET() {
  try {
    return Response.json({ success: true, grades })
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

    const newGrade = {
      _id: generateId(),
      subject,
      grade,
      module_id: module_id || null,
      createdAt: new Date(),
    }

    grades.push(newGrade)

    return Response.json(
      {
        success: true,
        id: newGrade._id,
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
