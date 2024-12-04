import express from 'express';
import vehicleModel from './models/vehicleModel';
import vehicleRoutes from './routes/vehicleRoutes';
import path from 'path';

const app = express();
app.use(express.json());

// Serve static files for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/vehicles', vehicleRoutes);

const initializeApp = async () => {
  await vehicleModel.initialize();
};

const PORT = 3010;
app.listen(PORT, async () => {
  await initializeApp();
  console.log(`Server started on port ${PORT}`);
});
