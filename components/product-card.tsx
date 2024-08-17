import Image from "next/image";
import { AddCartButton } from "./button/add-cart";
import StarRating from "./rating";
import { IProduct } from "@/lib/types";

export const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div
      key={product.id}
      className="flex flex-col relative justify-between min-h-[320px] max-h-[420px] bg-white px-2 py-4 shadow-lg rounded-xl md:hover:scale-105 transition-transform delay-150 card-border card-border-hover"
    >
      <Image
        src={product?.image}
        alt={product.title}
        width={140}
        height={140}
        className=" w-full h-2/3 object-contain"
      />
      <span className="inline-flex items-center px-2 py-1 text-sm font-medium bg-secondary/95  rounded-lg shadow-lg absolute top-1 right-2 ">
        {product.category}
      </span>
      <div className="flex justify-between items-center w-full gap-4">
        <h2 className=" font-medium truncate w-full">{product.title}</h2>
        <h3 className="text-center font-bold">${product.price}</h3>
      </div>
      <div className="flex justify-between items-center">
        <StarRating rating={product.rating.rate} />
        <span className="inline-flex items-center justify-between bg-secondary/95 shadow-lg rounded-lg px-2 py-1">
          <Star />
          {product.rating.count}
        </span>
      </div>
      <AddCartButton data={product} />
    </div>
  );
};

const Star = () => {
  return (
    <svg
      className="w-6 h-6 text-yellow-500 "
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
};
