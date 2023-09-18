import { oneProductType } from "../utils/ProductsDataArrayAndTypes";
import ImageUrlBuilder from "@sanity/image-url";
import React, { FC } from "react";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";

const builder = ImageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const Card: FC<{ singleProductData: oneProductType }> = ({
  singleProductData,
}) => {
  return (
    <Link href={singleProductData.slug.current}>
      <div className="bg-white border rounded-lg min-w-[24rem] select-none hover:scale-105 duration-300 scroll-m-0">
        <div className="w-full relative">
          <div className="absolute inset-0 z-10" />
          <Image
            width={500}
            height={500}
            src={urlFor(singleProductData.image[0])
              .width(500)
              .height(500)
              .url()}
            alt={singleProductData.image[0].alt}
          />
        </div>
        <div className="space-y-1 font-semibold text-lg text-center border-t-4 border-[#ffc300]">
          <h6>{singleProductData.productName}</h6>
          <p>{singleProductData.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
