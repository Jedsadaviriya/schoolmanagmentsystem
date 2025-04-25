import { connectToDatabase } from "../../lib/mongodb";
import { ObjectId } from "mongodb"


export async function POST(request) {
  try {
    const { subject, grade, date } = await request.json();
    const { db } = await connectToDatabase();

    const result = await db.collection("grades").insertOne({
      subject,
      grade,
      date: date || new Date().toISOString(),
      createdAt: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({ success: true, id: result.insertedId }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const grades = await db.collection("grades").find({}).toArray();

    return new Response(JSON.stringify({ success: true, grades }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}


export async function DELETE(request, { params }) {
  try {
    const { id } = params
    const { db } = await connectToDatabase()

    const result = await db.collection("grades").deleteOne({
      _id: new ObjectId(id),
    })

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ success: false, error: "Note nicht gefunden" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      })
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
