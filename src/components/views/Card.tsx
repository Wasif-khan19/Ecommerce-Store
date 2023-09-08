import { oneProductType } from '../utils/ProductsDataArrayAndTypes'
import ImageUrlBuilder from '@sanity/image-url'
import React, { FC } from 'react'
import Image from 'next/image'
import { client } from '../../../sanity/lib/client'
import PortableText from 'react-portable-text'

const builder = ImageUrlBuilder(client)

function urlFor(source: any){
    return builder.image(source)
}

const Card: FC<{ singleProductData: oneProductType }> = ({ singleProductData }) => {
    
    return (
        <div className='border-4 border-black max-w-sm min-w-[24rem] space-y-3 rounded-lg'>
            <div className='w-full'>
                <Image width={1000} height={1000} src={urlFor(singleProductData.image[0]).width(1000).height(1000).url()} alt={singleProductData.image[0].alt}/>
            </div>
            <div className='space-y-1 font-semibold text-lg text-center bg-white border-black'>
                <h6>{singleProductData.productName}</h6> 
                <p>{singleProductData.price}</p>
            </div>
        </div>
    )
}

export default Card
