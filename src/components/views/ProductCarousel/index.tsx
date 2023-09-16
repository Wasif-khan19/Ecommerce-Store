"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { oneProductType } from "@/components/utils/ProductsDataArrayAndTypes";
import { Component, FC, ReactNode } from "react";
import Card from "../Card";

// export default ProductCarousel

// export default class ProductCarousel extends Component<{
//   ProductData: Array<oneProductType>;
// }> {
//   render(): ReactNode {
//     var settings = {
//       dots: true,
//       infinite: false,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       centermode: true,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           }
//         }
//       ]
//     };

const ProductCarousel: FC<{ ProductData: Array<oneProductType> }> = ({
  ProductData,
}) => {
  let initialX: number;
  let isDragging = false;
  let tabBox: any;

  const isBrowser = () => typeof window !== "undefined";

  if (isBrowser()) {
    tabBox = document.querySelector(".scrollGrab");
  }

  // Desktop functions
  function mouseMoves(e: any) {
    if (!isDragging) return;
    if (tabBox) {
      tabBox.scrollLeft -= e.movementX;
    }
  }
  function mouseDown() {
    console.log("moving orignal");
    isDragging = true;
  }
  function mouseUp() {
    isDragging = false;
  }

  // mobile functions
  function mouseMovesForMobile(e: any) {
    if (!isDragging) return;
    if (tabBox) {
      var currentX = e.touches[0].clientX;
      var movementX = currentX - initialX;
      tabBox.scrollLeft -= movementX / 5;
    }
  }
  function mouseDownForMobile(e: any) {
    isDragging = true;
    initialX = e.touches[0].clientX;
  }
  let dataToItrate = ProductData.slice(0, 15)

  return (
    <div>
      <div className="text-center space-y-3">
        <p className="text-blue-800 text-lg font-semibold">PRODUCTS</p>
        <h3 className="text-black text-4xl font-extrabold">
          Check What We Have
        </h3>
      </div>
      <div className="mt-8"></div>
      <div
        onMouseMove={mouseMoves}
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        className="select-none flex gap-4 overflow-x-hidden scrollGrab"
        onTouchMove={mouseMovesForMobile}
        onTouchStart={mouseDownForMobile}
        onTouchEnd={mouseUp}
      >
        {dataToItrate.map((item: oneProductType, index: number) => (
          <Card key={index + 4} singleProductData={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
