import express from "express";
import { connectDatabase } from './db/database';
import productRoutes from "./routes/productRoutes";
import { errorHandler } from "./utils/errorHandler";

export const app = express();
app.use(express.json());
app.use("/api/products", productRoutes);
app.use(errorHandler);

(async () => {
    await connectDatabase();
    app.listen(3010, () => {
        console.log("Server started on port 3010");
    });
})();
