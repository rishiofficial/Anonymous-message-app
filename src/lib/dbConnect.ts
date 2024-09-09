
import mongoose from "mongoose"

type ConnectionObject = {
    isConnected?: number 
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already connected");
        return;
    }
    if (!process.env.MONGODB_URI) {
        console.error("MONGODB_URI is not defined in environment variables");
        process.exit(1);
    }
    try {
        // console.log("Connecting to MongoDB...");
        const db = await mongoose.connect(process.env.MONGODB_URI, {});
        connection.isConnected = db.connections[0].readyState;
        // console.log("Connecting to MongoDB with URI:", process.env.MONGODB_URI);

        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection failed. Error details:", error);
        process.exit(1);
    }
}

export default dbConnect;