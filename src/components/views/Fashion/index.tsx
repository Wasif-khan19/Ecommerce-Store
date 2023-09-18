import Image from "next/image"
import Shop from '@/components/assets/Images/Shop.png'
import { hero } from '@/components/assets'

const Jewellery = () => {
    return (
        <div className="px-1 text-black mt-5">

            {/* top */}
            <div className="flex text-center justify-center md:justify-end text-4xl md:text-5xl font-bold py-4 ">
                <h6 className="max-w-[27rem]">Unique and Authentic Fashion Products Available</h6>
            </div>

            {/* bottom */}
            <div className="flex flex-col md:flex-row justify-between py-4 mt-2 gap-5">
                {/* left */}

                <div className="relative basis-1/2  gap-6 lg:gap-10 grid grid-cols-2 grid-rows-2">
                    <div className="absolute -z-50 text-yellow-300 inset-0">
                        <h6 className="text-5xl md:text-7xl lg:text-[7.3rem] leading-[5.9rem] font-bold">Different from others</h6>
                    </div>
                    <div className="max-w-[13rem] space-y-2">
                        <h6 className="font-semibold text-xl">Using Good Quality Materials</h6>
                        <p className="text-lg leading-5">We are proud to use good quality materials.</p>
                    </div>
                    <div className="max-w-[13rem] space-y-2">
                        <h6 className="font-semibold text-xl">Best Customer Service</h6>
                        <p className="text-lg leading-5">Feel free to reach us out bcause we are offering best service.</p>
                    </div>
                    <div className="max-w-[13rem] space-y-2">
                        <h6 className="font-semibold text-xl">Free Product Delivery</h6>
                        <p className="text-lg leading-5">Our aim to offer free delivery all over UAE.</p>
                    </div>
                    <div className="max-w-[13rem] space-y-2">
                        <h6 className="font-semibold text-xl">Good Price and Huge Discounts</h6>
                        <p className="text-lg leading-5">On special events we offer huge discounts flat 50% Off.</p>
                    </div>
                </div>




                {/* right */}
                <div className="flex flex-col lg:flex-row basis-1/2">
                    <div className="w-full px-4 lg:px-0 lg:w-80">
                    <Image src={hero} width={550} height={550} alt='hero section nextjs shopping images discount sale dubai amazon sahal sooq' />
                    </div>
                    <div className="space-y-8 md:space-y-4 p-6 text-center">
                        <p style={{wordSpacing:"0.8rem"}} className="h-[90%] lg:max-w-[15rem]">
                            Each and every product is manufacture under the supervision of our highly skilled workers in UAE with unmatched attention to detail and care.
                        </p>
                        <div>
                        <button className="transition ease-in duration-300 rounded-md cursinter bg-black px-3 py-3 text-xl font-medium text-white hover:bg-blue-800 hover:text-black">See All Products</button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Jewellery