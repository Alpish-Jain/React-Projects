import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;