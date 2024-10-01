import Filter from '@/components/Filter';
import ProductList from '@/components/ProductList';
import Image from 'next/image';

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px32 2xl:px-64">
      {/* COMPAIGN */}
      <div className="hidden  bg-pink-50 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col justify-center items-center gap-8">
          <h2 className='text-4xl font-semibold leading-[48px] text-gray-700'>Grab up to 50% off on <br />
           Selected Products</h2>
          <button className='bg-lama text-white py-3 px-6 text-sm rounded-3xl w-max'>Buy Now</button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      {/* FILTER */}
      <Filter/>
      {/* PRODUCTS */}
      <h2 className='mt-12 text-xl font-semibold '>Shoes for You</h2>
      <ProductList/>
    </div>
  );
};

export default ListPage;
