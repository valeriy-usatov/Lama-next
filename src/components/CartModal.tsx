'use client';

import Image from 'next/image';

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12  right-0 flex flex-col gap-6 z-20 w-max">
      {!cartItems ? (
        <div>Cart is Emply</div>
      ) : (
        <div>
          <h2 className="text-xl mb-5">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://avatars.mds.yandex.net/i?id=94d6b2e6755e89000939c0b67acd1be2_l-5179194-images-thumbs&n=13"
                alt=""
                width={72}
                height={96}
                layout="fixed"
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex justify-between items-center gap-8">
                    <h3 className="font-semibold">Product name</h3>
                    <div className="p-1 bg-green-50 rounded-sm">$49</div>
                  </div>
                  {/* {DESC} */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://avatars.mds.yandex.net/i?id=94d6b2e6755e89000939c0b67acd1be2_l-5179194-images-thumbs&n=13"
                alt=""
                width={72}
                height={96}
                layout="fixed"
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex justify-between items-center gap-8">
                    <h3 className="font-semibold">Product name</h3>
                    <div className="p-1 bg-green-50 rounded-sm">$49</div>
                  </div>
                  {/* {DESC} */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes culculated at checkout
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
              <button className="rounded-md py-3 px-4 bg-black text-white">Check out</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
