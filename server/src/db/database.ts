import Database, {Database as TDatabase} from "better-sqlite3";


export const connectDatabase = async (): Promise<TDatabase> => {
  try {
    /**@todo change pragma key*/
    const db = new Database('./database.db');
    db.pragma('key = "admin111"');
    console.log('Connected to the encrypted database successfully.');
    return db;
  } catch (error) {
    console.error('Error connecting to the encrypted database:', error);
    throw new Error('Database connection failed');
  }
};
