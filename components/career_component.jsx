import React from 'react';

const CareerComponent = ({ argument }) => {
  return (
    <div className="max-w-2xl mx-auto my-8 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="p-6">
        <div className="text-gray-500 text-sm md:text-xl mb-2">
          {argument.date}
        </div>
        <div>
          <a href={argument.link} className="text-blue-600 hover:underline text-xl md:text-2xl font-bold">
            {argument.name}
          </a>
        </div>
        <div className="text-gray-700 mt-4 md:text-lg leading-relaxed">
          {argument.description}
        </div>
      </div>
    </div>
  );
};

export default CareerComponent; 