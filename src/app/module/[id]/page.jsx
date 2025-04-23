// src/app/modules/[id]/page.jsx
import { connectToDatabase } from "../../lib/mongodb";

export default async function ModuleDetail({ params }) {
  const { db } = await connectToDatabase();

  // Convert the string ID to MongoDB ObjectId
  const { ObjectId } = require("mongodb");
  let module;

  try {
    module = await db
      .collection("modules")
      .findOne({ _id: new ObjectId(params.id) });
  } catch (e) {
    return <div className="container mx-auto p-4">Module not found</div>;
  }

  if (!module) {
    return <div className="container mx-auto p-4">Module not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">{module.title}</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Module Information</h2>
          <p className="text-gray-600">Module Number: {module.module_number}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="text-gray-600">
            {module.description || "No description available"}
          </p>
        </div>

        {/* Add more module details as needed */}
        <div className="mt-6">
          <a
            href="/module"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Back to Modules
          </a>
        </div>
      </div>
    </div>
  );
}
