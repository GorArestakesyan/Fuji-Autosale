import { Database } from 'better-sqlite3';
import { connectDatabase } from '../db/database';

class VehicleModel {
  private db: Database | null = null;

  private ensureConnection() {
    if (!this.db) {
      throw new Error('Database connection not initialized.');
    }
  }

  public async connect() {
    this.db = await connectDatabase();
  }

  public async initialize() {
    if (!this.db) await this.connect();

    try {
      this.db
        ?.prepare(
          `
            CREATE TABLE IF NOT EXISTS vehicles (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              description TEXT,
              price REAL NOT NULL,
              createdBy TEXT NOT NULL,
              image TEXT,
              make TEXT,
              model TEXT,
              year INTEGER,
              mileage REAL,
              fuelType TEXT,
              transmission TEXT,
              engineSize REAL,
              color TEXT,
              numberOfSeats INTEGER,
              numberOfDoors INTEGER,
              wheelDrive TEXT,
              city TEXT,
              zipCode TEXT
            )
            `,
        )
        .run();
    } catch (error) {
      console.error('Error initializing vehicles table:', error);
      throw error;
    }
  }

  public getAllVehicles() {
    this.ensureConnection();
    return this.db?.prepare('SELECT * FROM vehicles').all() || [];
  }

  public createVehicle(
    name: string,
    description: string,
    price: number,
    createdBy: string,
    image: string,
    make: string,
    model: string,
    year: number,
    mileage: number,
    fuelType: string,
    transmission: string,
    engineSize: number,
    color: string,
    numberOfSeats: number,
    numberOfDoors: number,
    wheelDrive: string,
    city: string,
    zipCode: string,
  ) {
    this.ensureConnection();
    return this.db
      ?.prepare(
        `INSERT INTO vehicles (
                name, description, price, createdBy, image,
                make, model, year, mileage, fuelType,
                transmission, engineSize, color, numberOfSeats,
                numberOfDoors, wheelDrive, city, zipCode
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        name,
        description,
        price,
        createdBy,
        image,
        make,
        model,
        year,
        mileage,
        fuelType,
        transmission,
        engineSize,
        color,
        numberOfSeats,
        numberOfDoors,
        wheelDrive,
        city,
        zipCode,
      );
  }

  public deleteVehicle(id: string) {
    this.ensureConnection();
    this.db?.prepare('DELETE FROM vehicles WHERE id = ?').run(id);
  }

  public updateVehicle(
    id: string,
    name: string,
    description: string,
    price: number,
    image?: string,
    make?: string,
    model?: string,
    year?: number,
    mileage?: number,
    fuelType?: string,
    transmission?: string,
    engineSize?: number,
    color?: string,
    numberOfSeats?: number,
    numberOfDoors?: number,
    wheelDrive?: string,
    city?: string,
    zipCode?: string,
  ) {
    this.ensureConnection();
    const query = image
      ? `UPDATE vehicles SET name = ?, description = ?, price = ?, image = ?, make = ?, model = ?, year = ?, mileage = ?, fuelType = ?, transmission = ?, engineSize = ?, color = ?, numberOfSeats = ?, numberOfDoors = ?, wheelDrive = ?, city = ?, zipCode = ? WHERE id = ?`
      : `UPDATE vehicles SET name = ?, description = ?, price = ?, make = ?, model = ?, year = ?, mileage = ?, fuelType = ?, transmission = ?, engineSize = ?, color = ?, numberOfSeats = ?, numberOfDoors = ?, wheelDrive = ?, city = ?, zipCode = ? WHERE id = ?`;

    return this.db
      ?.prepare(query)
      .run(
        image
          ? [
              name,
              description,
              price,
              image,
              make,
              model,
              year,
              mileage,
              fuelType,
              transmission,
              engineSize,
              color,
              numberOfSeats,
              numberOfDoors,
              wheelDrive,
              city,
              zipCode,
              id,
            ]
          : [
              name,
              description,
              price,
              make,
              model,
              year,
              mileage,
              fuelType,
              transmission,
              engineSize,
              color,
              numberOfSeats,
              numberOfDoors,
              wheelDrive,
              city,
              zipCode,
              id,
            ],
      );
  }
}

export default new VehicleModel();
