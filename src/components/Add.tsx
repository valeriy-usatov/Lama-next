'use client';

import { useState } from 'react';

const Add = () => {
  const [quantity, setQuantity] = useState(0);

  //   TEMPORARY
  const stock = 4;

  const handleQuantity = (type: 'i' | 'd') => {
    if (type === 'd' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }

    if (type === 'i' && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl w-36">
            <button className="py-1 px-4 text-xl" onClick={() => handleQuantity('d')}>
              -
            </button>
            <span className='px-1'>{quantity}</span>
            <button className="py-1 px-4 text-xl" onClick={() => handleQuantity('i')}>
              +
            </button>
          </div>
          <div className="w-28 text-xs">
            Only <span className="text-orange-500">4 items</span> left! Dont mis it
          </div>
        </div>
        <button
          className={`w-36 text-sm text-lama ring-1 ring-lama py-2 px-4 rounded-3xl hover:text-white hover:bg-lama disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
