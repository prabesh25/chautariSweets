import React from 'react';

const ProductAttributes = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg text-center">
      {/* Title */}
      <h2 className="text-xl font-bold mb-2 text-gray-800">Hand Made With Love</h2>
      <p className="text-gray-600 mb-4">By exquisite sourcing, impeccable craftsmanship.</p>

      {/* Attribute Icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <div className="flex flex-col items-center">
          <img src="path/to/gluten-icon.png" alt="Contains Gluten" className="w-10 h-10" />
          <span className="text-gray-700 text-sm">Contains Gluten</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="path/to/dairy-icon.png" alt="Contains Dairy" className="w-10 h-10" />
          <span className="text-gray-700 text-sm">Contains Dairy</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="path/to/sugar-icon.png" alt="Contains Sugar" className="w-10 h-10" />
          <span className="text-gray-700 text-sm">Contains Sugar</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="path/to/jain-icon.png" alt="Jain" className="w-10 h-10" />
          <span className="text-gray-700 text-sm">Jain</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="path/to/veg-icon.png" alt="100% Veg" className="w-10 h-10" />
          <span className="text-gray-700 text-sm">100% Veg</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="path/to/preservative-icon.png" alt="Preservative Free" className="w-10 h-10" />
          <span className="text-gray-700 text-sm">Preservative Free</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="path/to/refrigerate-icon.png" alt="Refrigerate" className="w-10 h-10" />
          <span className="text-gray-700 text-sm">Refrigerate</span>
        </div>
      </div>
    </div>
  );
};

export default ProductAttributes;