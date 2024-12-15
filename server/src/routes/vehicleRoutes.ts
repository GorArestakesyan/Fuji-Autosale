import express from 'express';
import multer from 'multer';
import path from 'path';
import vehicleModel from '../models/vehicleModel';

const router = express.Router();

// Configure Multer for file uploads
const upload = multer({
  dest: path.join(__dirname, '../uploads'), // Directory to save uploaded files
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true); // Accept file
    } else {
      cb(null, false); // Reject file
    }
  },
});

// Get all vehicles
router.get('/', async (req, res) => {
  try {
    const vehicles = await vehicleModel.getAllVehicles();
    res.json(vehicles);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).send('Internal server error');
  }
});

// Delete a vehicle
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await vehicleModel.deleteVehicle(id);
    if (Boolean(deleted)) {
      res.status(200).send('Vehicle deleted successfully');
    } else {
      res.status(404).send('Vehicle not found');
    }
  } catch (error) {
    console.error('Error deleting vehicle:', error);
    res.status(500).send('Internal server error');
  }
});

// Create a new vehicle
router.post('/', upload.single('image'), async (req: any, res: any) => {
  const {
    name,
    description,
    price,
    createdBy,
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
  } = req.body;

  const image = req.file?.filename || '';

  if (!name || !price || !createdBy) {
    return res
      .status(400)
      .send('Missing required fields: name, price, or createdBy');
  }

  try {
    await vehicleModel.createVehicle(
      name,
      description,
      parseFloat(price),
      createdBy,
      image,
      make,
      model,
      parseInt(year),
      parseFloat(mileage),
      fuelType,
      transmission,
      parseFloat(engineSize),
      color,
      parseInt(numberOfSeats),
      parseInt(numberOfDoors),
      wheelDrive,
      city,
      zipCode,
    );

    res.status(201).send('Vehicle created successfully');
  } catch (error) {
    console.error('Error creating vehicle:', error);
    res.status(500).send('Internal server error');
  }
});

// Update a vehicle
/** @todo fix types */
router.put('/:id', async (req: any, res: any) => {
  const { id } = req.params;
  const { name, description, price } = req.body;

  if (!name || !price) {
    return res.status(400).send('Missing required fields: name or price');
  }

  try {
    const updated = await vehicleModel.updateVehicle(
      id,
      name,
      description,
      parseFloat(price),
    );
    if (updated) {
      res.send('Vehicle updated successfully');
    } else {
      res.status(404).send('Vehicle not found or no changes made');
    }
  } catch (error) {
    console.error('Error updating vehicle:', error);
    res.status(500).send('Internal server error');
  }
});

export default router;
