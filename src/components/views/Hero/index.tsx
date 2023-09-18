import { hero } from '@/components/assets'
import React from 'react'
import Image from 'next/image'
import { FiShoppingBag } from 'react-icons/fi'

const Hero = () => {
  return (
    <div className='mt-10 flex justify-between items-center flex-col md:flex-row'>
      {/* right side */}
      <div className='space-y-6 max-w-[28rem] text-center md:text-left'>
        <button aria-label='redirect to discounts page' className='rounded-md cursinter bg-black px-3 py-3 text-xl font-medium text-white '>SALE 70%</button>
        <h1 className='text-5xl sm:text-6xl font-bold'>Embrace The Joy Of Online Shopping</h1>
        <p className='text-lg'>Elevate Your Fashion and Empower Your Creations with Our Curated Collection of Fashion and Kitchen Essentials</p>
        <div className='flex items-center justify-center md:justify-start'>
          <button aria-label='redirect to start and main page for shopping' className='flex hover:text-black transition ease-in duration-300 hover:bg-blue-800 rounded-md bg-black px-3 py-3 text-xl font-medium text-white'>
            <FiShoppingBag size={29} className='mr-2' />
            Start Shopping
          </button>
        </div>
      </div>

      {/* left side */}
      <div className='rounded-full hidden md:block lg:block'>
        <Image src={hero} width={550} height={550} alt='hero section nextjs shopping images discount sale dubai amazon sahal sooq' />
      </div>
    </div>
  )
}

export default Hero
