import { useState } from 'react';
import ProductGallery from './ProductGallery';
import OptionSelect from './OptionSelect';
import Button from './Button';

export default function ProductCard({ product, onAddToCart }) {
  const [size, setSize] = useState(
    Array.isArray(product.sizes) && product.sizes.length ? product.sizes[0] : null
  );
  const [color, setColor] = useState(
    Array.isArray(product.colors) && product.colors.length ? product.colors[0] : null
  );

  const handleAdd = () => {
    if (!product._id) return;
    onAddToCart({
      _id: product._id,
      name: product.name,
      price: product.price,
      image: Array.isArray(product.images) && product.images[0] ? product.images[0] : null,
      size: size ?? undefined,
      color: color ?? undefined,
      quantity: 1,
    });
  };

  return (
    <article className="product-card">
      <ProductGallery images={product.images} alt={product.name} />
      <div className="product-card-body">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${Number(product.price).toFixed(2)}</p>
        <OptionSelect
          label="Size"
          options={product.sizes || []}
          value={size}
          onChange={setSize}
          name="size"
        />
        <OptionSelect
          label="Color"
          options={product.colors || []}
          value={color}
          onChange={setColor}
          name="color"
        />
        <Button onClick={handleAdd} className="add-to-cart-btn">
          Add to cart
        </Button>
      </div>
    </article>
  );
}
