import Database, { Database as TDatabase } from 'better-sqlite3';


export const connectDatabase = async (): Promise<TDatabase> => {
    try {
        // Open or create an encrypted SQLite database
        const db = new Database('./database.db', { verbose: console.log }); // Path to your encrypted database
        
        // Set the encryption key for the database
        db.pragma('key = "admin111"');  // Replace with your encryption password
        
        console.log("Connected to the encrypted database successfully.");
        return db;
    } catch (error) {
        console.error("Error connecting to the encrypted database:", error);
        throw new Error("Database connection failed");
    }
};
