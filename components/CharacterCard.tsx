
import React from 'react';

interface CharacterCardProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, title, description, imageUrl }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out border border-green-700/20 group">
      <img className="w-full h-56 object-cover object-center group-hover:opacity-80 transition-opacity" src={imageUrl} alt={name} />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-green-400 mb-1">{name}</h3>
        <p className="text-sm text-green-200 italic mb-3">{title}</p>
        <p className="text-gray-400 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
