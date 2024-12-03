import { Database } from 'better-sqlite3';
import { connectDatabase } from '../db/database'; // Import the new connection function

class VehicleModel {
  private db: Database | null = null;

  public async connect() {
    try {
      this.db = await connectDatabase(); // Get the encrypted database
      console.log('Database connected.');
    } catch (error) {
      console.error('Error initializing database connection:', error);
      throw new Error('Failed to connect to the database');
    }
  }

  public async initialize() {
    if (!this.db) {
      console.log('Database is not connected. Attempting to reconnect...');
      await this.connect();
    }

    try {
      // Initialize the vehicles table if not already present
      await this.db
        ?.prepare(
          `
                CREATE TABLE IF NOT EXISTS vehicles (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    description TEXT,
                    price REAL NOT NULL,
                    createdBy TEXT NOT NULL
                )
            `,
        )
        .run();
      console.log('Vehicles table initialized successfully.');
    } catch (error) {
      console.error('Error initializing vehicles table:', error);
      throw new Error('Failed to initialize vehicles table');
    }
  }

  public async getAllVehicles() {
    try {
      const vehicles = this.db?.prepare('SELECT * FROM vehicles').all();
      return vehicles || []; // Return an empty array if no vehicles are found
    } catch (error) {
      console.error('Error fetching vehicles:', error);
      throw new Error('Failed to fetch vehicles');
    }
  }

  public async createVehicle(
    name: string,
    description: string,
    price: number,
    createdBy: string,
  ) {
    try {
      const result = this.db
        ?.prepare(
          `
                INSERT INTO vehicles (name, description, price, createdBy)
                VALUES (?, ?, ?, ?)
            `,
        )
        .run(name, description, price, createdBy);
      console.log('Product added successfully:', result);
    } catch (error) {
      console.error('Error adding vehicle:', error);
      throw new Error('Failed to add vehicle');
    }
  }

  public async updateVehicle(
    id: string,
    name: string,
    description: string,
    price: number,
  ) {
    try {
      const result = this.db
        ?.prepare(
          `
                UPDATE vehicles
                SET name = ?, description = ?, price = ?
                WHERE id = ?
            `,
        )
        .run(name, description, price, id);
      if (result?.changes) {
        return result?.changes > 0;
      }
    } catch (error) {
      console.error('Error updating vehicle:', error);
      throw new Error('Failed to update vehicle');
    }
  }
}

export default new VehicleModel();
