import { MongoClient } from "mongodb"

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/schoolManagementSystem"
const MONGODB_DB = process.env.MONGODB_DB || "schoolManagementSystem"

// Check if we're in production
const isProd = process.env.NODE_ENV === "production"

// Connection caching
let cachedClient = null
let cachedDb = null

export async function connectToDatabase() {
  // If we have a cached connection, use it
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  // Set options for MongoDB client
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  try {
    // Connect to MongoDB
    const client = await MongoClient.connect(MONGODB_URI, opts)
    const db = client.db(MONGODB_DB)

    // Cache the connection
    cachedClient = client
    cachedDb = db

    return { client, db }
  } catch (error) {
    console.error("MongoDB connection error:", error)
    throw new Error("Failed to connect to database")
  }
}
