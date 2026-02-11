import { useState } from 'react';

export default function ProductGallery({ images = [], alt = 'Product' }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const list = Array.isArray(images) && images.length ? images : ['https://via.placeholder.com/400?text=No+Image'];

  return (
    <div className="product-gallery">
      <div className="gallery-main">
        <img src={list[selectedIndex]} alt={`${alt} view ${selectedIndex + 1}`} />
      </div>
      {list.length > 1 && (
        <div className="gallery-thumbnails">
          {list.map((src, i) => (
            <button
              key={i}
              type="button"
              className={`thumb ${i === selectedIndex ? 'active' : ''}`}
              onClick={() => setSelectedIndex(i)}
              aria-label={`View image ${i + 1}`}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
