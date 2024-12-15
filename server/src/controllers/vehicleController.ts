import { Request, Response } from 'express';
import vehicleModel from '../models/vehicleModel';

export const getVehicles = async (req: Request, res: Response) => {
  try {
    const vehicles = await vehicleModel.getAllVehicles();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch vehicles' });
  }
};

export const addVehicle = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
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

    await vehicleModel.createVehicle(
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

    res.status(201).json({
      message: 'Vehicle added successfully',
      data: {
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
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add vehicle' });
  }
};

export const editVehicle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
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
    } = req.body;

    const success = await vehicleModel.updateVehicle(
      id,
      name,
      description,
      price,
      undefined,
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

    if (success) {
      res.status(200).json({ message: 'Vehicle updated successfully' });
    } else {
      res.status(400).json({ message: 'Vehicle not found or no changes made' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update vehicle' });
  }
};

export const deleteVehicle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const success = await vehicleModel.deleteVehicle(id);

    if (success) {
      res.status(200).json({ message: 'Vehicle deleted successfully' });
    } else {
      res.status(404).json({ message: 'Vehicle not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete vehicle' });
  }
};
