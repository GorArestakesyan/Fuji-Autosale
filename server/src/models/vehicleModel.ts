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
            this.db?.prepare(`
        CREATE TABLE IF NOT EXISTS vehicles (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          description TEXT,
          price REAL NOT NULL,
          createdBy TEXT NOT NULL,
          image TEXT
        )
      `).run();
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
    ) {
        this.ensureConnection();
        return this.db?.prepare(
            `INSERT INTO vehicles (name, description, price, createdBy, image)
      VALUES (?, ?, ?, ?, ?)`
        ).run(name, description, price, createdBy, image);
    }

    public updateVehicle(
        id: string,
        name: string,
        description: string,
        price: number,
        image?: string,
    ) {
        this.ensureConnection();
        const query = image
            ? `UPDATE vehicles SET name = ?, description = ?, price = ?, image = ? WHERE id = ?`
            : `UPDATE vehicles SET name = ?, description = ?, price = ? WHERE id = ?`;

        return this.db?.prepare(query).run(image ? [name, description, price, image, id] : [name, description, price, id]);
    }
}

export default new VehicleModel();
