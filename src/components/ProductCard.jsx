import React from 'react';

const ProductCard = ({ product, addToCart, removeFromCart, inCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow">
      <img src={product.image} alt="" className="w-full h-40 object-cover mb-4" />
      <h2 className="text-xl font-semibold">{product.title}</h2>
      <p className="text-gray-600 mb-2">${product.price}</p>
      <p className="text-gray-600 mb-4">{product.description}</p>
      {inCart ? (
        <button
          className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg"
          onClick={() => removeFromCart(product.id)}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
