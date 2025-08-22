// src/lib/mongodb.js
import { MongoClient } from "mongodb";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/schoolManagementSystem";
const MONGODB_DB = process.env.MONGODB_DB || "schoolManagementSystem";

// Validate environment variables
if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in your .env.local file");
}

// Connection caching
let cachedClient = null;
let cachedDb = null;

// Use global cache in development to handle hot-reloading
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    const client = new MongoClient(MONGODB_URI);
    global._mongoClientPromise = client.connect();
  }
  cachedClient = global._mongoClientPromise;
} else {
  // In production, create a new client if not cached
  if (!cachedClient) {
    cachedClient = new MongoClient(MONGODB_URI).connect();
  }
}

async function connectToDatabase() {
  try {
    const client = await cachedClient;
    const db = client.db(MONGODB_DB);

    // Cache the database instance
    cachedDb = db;

    return { client, db };
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to database");
  }
}

// Export as named export to match imports in your files
export { connectToDatabase };
