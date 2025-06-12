import React from 'react';
import clothesImage from '../assets/clothes.png';
import toysImage from '../assets/toys.png';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: clothesImage,
      title: 'Clothing Donations',
      description: 'Clean, gently used clothes ready for distribution'
    },
    {
      id: 2,
      image: toysImage,
      title: 'Toy Collection',
      description: 'Toys bringing joy to children in need'
    }
  ];

  return (
    <div className="gallery-page">
      <div className="page-header">
        <h1>Our Gallery</h1>
        <p>Coming Soon!</p>
      </div>

      <div className="gallery-content">
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.title} />
              <div className="gallery-caption">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gallery; 