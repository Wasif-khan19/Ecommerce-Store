"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { oneProductType } from "@/components/utils/ProductsDataArrayAndTypes";
import { Component, FC, ReactNode } from "react";
import Card from "../Card";

// const ProductCarousel: FC<{ ProductData: Array<oneProductType> }> = ({ ProductData }) => {
//     return (
//         <div className='flex'>
//
//         </div>
//     )
// }

// export default ProductCarousel

export default class ProductCarousel extends Component<{
  ProductData: Array<oneProductType>;
}> {
  render(): ReactNode {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };

    return (
      <div>
        <div className="text-center space-y-3">
          <p className="text-blue-800 text-lg font-semibold">PRODUCTS</p>
          <h3 className="text-black text-4xl font-extrabold">Check What We Have</h3>
        </div>
        <div className="mt-8">
        <Slider {...settings}>
          {this.props.ProductData.map((item: oneProductType, index: number) => (
            // eslint-disable-next-line react/jsx-key
            <Card singleProductData={item} />
          ))}
        </Slider>
        </div>
      </div>
    );
  }
}
