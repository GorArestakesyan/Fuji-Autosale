import { Database } from 'better-sqlite3';
import { connectDatabase } from '../db/database'; // Import the new connection function

class ProductModel {
    private db: Database | null = null;

    public async connect() {
        try {
            this.db = await connectDatabase();  // Get the encrypted database
            console.log("Database connected.");
        } catch (error) {
            console.error("Error initializing database connection:", error);
            throw new Error("Failed to connect to the database");
        }
    }

    public async initialize() {
        if (!this.db) {
            console.log("Database is not connected. Attempting to reconnect...");
            await this.connect();
        }

        try {
            // Initialize the products table if not already present
            await this.db?.prepare(`
                CREATE TABLE IF NOT EXISTS products (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    description TEXT,
                    price REAL NOT NULL,
                    createdBy TEXT NOT NULL
                )
            `).run();
            console.log("Products table initialized successfully.");
        } catch (error) {
            console.error("Error initializing products table:", error);
            throw new Error("Failed to initialize products table");
        }
    }

    public async getAllProducts() {
        try {
            const products = this.db?.prepare("SELECT * FROM products").all();
            return products || [];  // Return an empty array if no products are found
        } catch (error) {
            console.error("Error fetching products:", error);
            throw new Error("Failed to fetch products");
        }
    }

    public async createProduct(name: string, description: string, price: number, createdBy: string) {
        try {
            const result = this.db?.prepare(`
                INSERT INTO products (name, description, price, createdBy)
                VALUES (?, ?, ?, ?)
            `).run(name, description, price, createdBy);
            console.log("Product added successfully:", result);
        } catch (error) {
            console.error("Error adding product:", error);
            throw new Error("Failed to add product");
        }
    }

    public async updateProduct(id: string, name: string, description: string, price: number) {
        try {
            const result = this.db?.prepare(`
                UPDATE products
                SET name = ?, description = ?, price = ?
                WHERE id = ?
            `).run(name, description, price, id);
            if (result?.changes) {
                return result?.changes > 0;
            }
        } catch (error) {
            console.error("Error updating product:", error);
            throw new Error("Failed to update product");
        }
    }
}

export default new ProductModel();
