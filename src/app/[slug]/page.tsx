import Add from '@/components/Add'
import CustomizeProducts from '@/components/CustomizeProducts'
import ProductImages from '@/components/ProductImages'
import React from 'react'

const SinglePage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
        {/* IMG */}
        <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
          <ProductImages/>
        </div>
        {/* TEXT */}
        <div className='w-full lg:w-1/2 flex flex-col gap-6'>
          <h2 className='text-4xl font-medium'>Product Name</h2>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quam libero at nesciunt corrupti exercitationem consequuntur distinctio iusto eveniet quasi nemo possimus placeat magni repellendus, ipsam a autem itaque temporibus.</p>
          <div className='h-[2px] bg-gray-100'></div>
          <div className='flex gap-4 items-center'>
            <span className='text-xl text-gray-500 line-through'>$45</span>
            <span className='font-medium text-2xl'>$40</span>
          </div>
          <div className='h-[2px] bg-gray-100'></div>
          <CustomizeProducts/>
          <Add/>
          <span className='font-medium text-2xl'>$40</span>
          <div className='text-sm'>
            <h4 className='font-medium mb-4'>Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iste vel sit dicta veniam incidunt nisi temporibus beatae hic rem corporis, quidem, minus saepe a distinctio est nostrum perspiciatis facilis!</p>
          </div>
          <div className='text-sm'>
            <h4 className='font-medium mb-4'>Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iste vel sit dicta veniam incidunt nisi temporibus beatae hic rem corporis, quidem, minus saepe a distinctio est nostrum perspiciatis facilis!</p>
          </div>
          <div className='text-sm'>
            <h4 className='font-medium mb-4'>Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iste vel sit dicta veniam incidunt nisi temporibus beatae hic rem corporis, quidem, minus saepe a distinctio est nostrum perspiciatis facilis!</p>
          </div>
        </div>
    </div>
  )
}

export default SinglePage