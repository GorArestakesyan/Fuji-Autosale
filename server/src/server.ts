import express from 'express';
import productModel from './models/productModel';
import productRoutes from './routes/productRoutes';

const app = express();
app.use(express.json());

const initializeApp = async () => {
  try {
    // Ensure the database is initialized
    await productModel.initialize();
  } catch (error) {
    console.error('Error initializing application:', error);
    process.exit(1); // Exit if initialization fails
  }
};

app.use('/products', productRoutes);

const PORT = 3010;
app.listen(PORT, async () => {
  await initializeApp();
  console.log(`Server started on port ${PORT}`);
});
