import React from 'react';

const CartPage = ({ cart, updateCartQuantity, removeFromCart }) => {
  const calculateTotal = () => {
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const discount = subtotal * 0.10;
    return (subtotal - discount).toFixed(2);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length > 0 ? (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <span>{item.title}</span>
              <div className="flex items-center space-x-4">
                <span>${item.price}</span>
                <div className="flex items-center">
                  <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)} className="px-2">-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)} className="px-2">+</button>
                </div>
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}

      <div className="mt-6 text-xl">
        <p>Total (after 10% discount): ${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default CartPage;
