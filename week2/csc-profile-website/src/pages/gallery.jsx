import React from 'react';

const Gallery = () => {
    const images = [
        'src/image/1.jpg',
        'src/image/2.jpg',
        'src/image/3.jpg',
        'src/image/4.jpg',
        'src/image/5.jpg',
        'src/image/6.jpg',
      ];

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {images.map((image, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
              <img src={image} alt={`Gallery item ${index}`} className="w-full h-full object-cover mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;