import React from 'react'
import Image from 'next/image'
import P5 from '@/components/assets/Images/p5.png'
import A1 from '@/components/assets/Images/a1.png'
import B1 from '@/components/assets/Images/b1.png'

const ProductTypes = () => {
  return (
    <div className='py-16 px-2'>
      <div className='text-center space-y-3'>
        <p className='text-blue-800 text-lg font-semibold'>PROMOTIONS</p>
        <h3 className='text-black text-4xl font-extrabold'>Our Promotions Events</h3>
      </div>

      <div className='grid md:grid-cols-3 gap-5 px-2 py-8'>
        <div className='w-full row-span-2 h-96 rounded-md border-2 border-black bg-white shadow-blue-800 shadow-xl'>
          <div className='text-center'>
            <h1 className='font-medium md:mt-2 lg:mt-4 md:text-3xl lg:text-4xl text-3xl mt-3'>Sports Watch</h1>
            <p className='text-3xl rounded-none mt-2 font-semibold py-2 bg-[#ffc300]'>Get Upto 50% Discount</p>
            <div className='flex justify-center items-center mt-2'>
              <Image src={P5} alt='' height={250} width={250} />
            </div>
          </div>
        </div>

        <div className='w-full row-span-2 h-96 rounded-md border-2 border-black bg-white shadow-blue-800 shadow-xl'>
          <div className='text-center'>
            <h1 className='font-medium md:mt-2 lg:mt-4 md:text-3xl lg:text-4xl text-3xl mt-3'>Zikar Ring</h1>
            <p className='text-3xl rounded-none mt-2 font-semibold py-2 bg-[#ffc300]'>Get Upto 60% Discount</p>
            <div className='flex justify-center items-center'>
              <Image src={A1} alt='' height={250} width={250} />
            </div>
          </div>
        </div>

        <div className='w-full row-span-2 h-96 rounded-md border-2 border-black bg-white shadow-blue-800 shadow-xl'>
          <div className='text-center'>
            <h1 className='font-medium md:mt-2 lg:mt-4 md:text-3xl lg:text-4xl text-3xl mt-3'>Speaker</h1>
            <p className='text-3xl rounded-none mt-2 font-semibold py-2 bg-[#ffc300]'>Get Upto 70% Discount</p>
            <div className='flex justify-center items-center'>
              <Image src={B1} alt='' height={250} width={250} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTypes
