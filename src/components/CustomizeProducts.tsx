const CustomizeProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a color</h4>
      <ul className="flex items-center gap-6">
        <li className="w-8 h-8 bg-black ring-1 ring-gray-400 cursor-pointer rounded-full flex items-center justify-center relative">
          <div className="w-12 h-12 ring-2 ring-gray-400 rounded-full absolute"></div>
        </li>
        <li className="w-8 h-8 bg-blue-500 ring-1 ring-gray-400 cursor-pointer rounded-full flex items-center justify-center relative"></li>
        <li className="w-8 h-8 bg-green-500 ring-1 ring-gray-400 cursor-not-allowed rounded-full flex items-center justify-center relative">
        <div className="w-12 h-[2px] bg-red-300 absolute rotate-45"></div>
        </li>
      </ul>
      <h4 className="font-medium">Choose a Size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm cursor-pointer">Small</li>
        <li className="ring-1 ring-lama text-white rounded-md py-1 bg-lama px-4 text-sm cursor-pointer">Medium</li>
        <li className="ring-1 ring-pink-200 text-white rounded-md py-1 bg-pink-200 px-4 text-sm cursor-not-allowed">Large</li>
      </ul>
    </div>
  );
};

export default CustomizeProducts;
