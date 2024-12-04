import { Request, Response } from 'express';
import productModel from '../models/vehicleModel';

export const getVehicles = async (req: Request, res: Response) => {
  try {
    const products = await productModel.getAllVehicles();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

export const addProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { name, price, description, createdBy } = req.body;
    await productModel.createVehicle(name, description, price, createdBy);
    res
      .status(201)
      .json({
        message: 'Product added successfully',
        data: { name, description, price, createdBy },
      });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add product' });
  }
};

export const editProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const success = await productModel.updateVehicle(
      id,
      name,
      description,
      price,
    );
    if (success) {
      res.status(200).json({ message: 'Product updated successfully' });
    } else {
      res.status(400).json({ message: 'Product not found or no changes made' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
};
