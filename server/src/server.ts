import express from 'express';
import vehicleModel from "./models/vehicleModel";
import vehicleRoutes from "./routes/vehicleRoutes";

const app = express();
app.use(express.json());

const initializeApp = async () => {
  try {
    // Ensure the database is initialized
    await vehicleModel.initialize();
  } catch (error) {
    console.error('Error initializing application:', error);
    process.exit(1); // Exit if initialization fails
  }
};

app.use('/vehicles', vehicleRoutes);

const PORT = 3010;
app.listen(PORT, async () => {
  await initializeApp();
  console.log(`Server started on port ${PORT}`);
});
