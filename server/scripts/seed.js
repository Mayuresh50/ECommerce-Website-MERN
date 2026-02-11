import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../src/models/Product.js';

dotenv.config();

const sampleProducts = [
  {
    name: 'Classic Cotton T-Shirt',
    description: 'Soft, breathable cotton t-shirt. Perfect for everyday wear.',
    price: 24.99,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Navy', 'Gray'],
  },
  {
    name: 'Slim Fit Jeans',
    description: 'Comfortable slim fit jeans with a modern look.',
    price: 59.99,
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400',
      'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=400',
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Blue', 'Black', 'Dark Wash', 'Light Wash'],
  },
  {
    name: 'Running Sneakers',
    description: 'Lightweight running shoes with cushioned sole.',
    price: 89.99,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400',
    ],
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['White', 'Black', 'Red', 'Blue'],
  },
];

async function seed() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI is required');
    process.exit(1);
  }
  await mongoose.connect(uri);
  await Product.deleteMany({});
  await Product.insertMany(sampleProducts);
  console.log('Seed completed:', sampleProducts.length, 'products added');
  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
