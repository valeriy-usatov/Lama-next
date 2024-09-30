import ProductList from '@/components/ProductList';
import CategoryList from '@/components/CategoryList';
import Slider from '@/components/Slider';

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px32 2xl:px-64">
        <h2 className="text-2xl">Featured Products</h2>
        <ProductList />
      </div>
      <div className="mt-24 ">
        <h2 className="text-2xl mb-12 px-4 md:px-8 lg:px-16 xl:px32 2xl:px-64">Categories</h2>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px32 2xl:px-64">
        <h2 className="text-2xl">New Products</h2>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
