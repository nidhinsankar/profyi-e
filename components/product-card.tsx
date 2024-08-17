import Image from "next/image";
import { AddCartButton } from "./button/add-cart";
import RatingCard from "./rating";
import StarRating from "./rating";
import { IProduct } from "@/lib/types";

export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <div
      key={product?.id}
      className="flex flex-col gap-5 h-[350px] w-[320px] relative group bg-white rounded-xl"
    >
      <div className="w-full h-full overflow-hidden rounded-xl py-4 px-3">
        <Image
          src={product?.image}
          alt={product.title}
          width={192}
          height={192}
          className="object-contain w-full h-full"
        />

        <div className="hover:bg-black/25 hidden group-hover:flex transition duration-100 rounded-xl absolute w-full h-full flex-col justify-between text-white px-4 py-2">
          <AddCartButton data={product} />
        </div>
      </div>
      <div className="flex justify-between items-center w-full gap-4">
        <h2 className=" font-medium truncate w-full">{product.title}</h2>
        <h3 className="text-center font-bold">${product.price}</h3>
      </div>
    </div>
  );
}

export const ProductCard1 = ({ product }: { product: IProduct }) => {
  return (
    <div className="flex flex-col relative justify-between min-h-[320px] max-h-[420px] bg-white px-2 py-4 rounded-xl md:hover:scale-105 transition-transform delay-150 card-border card-border-hover">
      <Image
        src={product?.image}
        alt={product.title}
        width={140}
        height={140}
        className=" w-full h-2/3 object-contain"
      />
      <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-purple-500 rounded-full shadow-lg absolute top-1 right-2 ">
        {product.category}
      </span>
      <div className="flex justify-between items-center w-full gap-4">
        <h2 className=" font-medium truncate w-full">{product.title}</h2>
        <h3 className="text-center font-bold">${product.price}</h3>
      </div>
      <div className="flex justify-between items-center">
        <StarRating rating={product.rating.rate} />
        <span>total reviews {product.rating.count}</span>
      </div>
      <AddCartButton data={product} />
    </div>
  );
};
