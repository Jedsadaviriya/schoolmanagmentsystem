import { connectToDatabase } from "../lib/mongodb";
import Link from "next/link";

export default async function Modules() {
  // Fetch modules from MongoDB
  const { db } = await connectToDatabase();
  const modules = await db.collection("modules").find({}).toArray();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Modules</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {modules.map((module) => (
          <div
            key={module._id.toString()}
            className="border rounded p-4 bg-gray-100 text-center"
          >
            <h2 className="text-lg font-semibold">{module.title}</h2>
            <p className="text-sm text-gray-600">
              Module ({module.module_number})
            </p>
            <Link href={`/module/${module._id}`}>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
