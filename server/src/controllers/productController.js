import Product from '../models/Product.js';

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({}).lean();
    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};
