import express from 'express';
import vehicleModel from '../models/vehicleModel';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const vehicles = await vehicleModel.getAllVehicles();
    res.json(vehicles);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).send('Internal server error');
  }
});

router.post('/', async (req, res) => {
  const { name, description, price, createdBy } = req.body;
  try {
    await vehicleModel.createVehicle(name, description, price, createdBy);
    res.status(201).send('Vehicle created successfully');
  } catch (error) {
    console.error('Error creating vehicle:', error);
    res.status(500).send('Internal server error');
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  try {
    const updated = await vehicleModel.updateVehicle(
      id,
      name,
      description,
      price,
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
