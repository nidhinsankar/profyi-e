import { AddCartButton } from "@/components/button/add-cart";
import Image from "next/image";

const getData = async () => {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
};

const ProductsPage = async () => {
  // const productList = await getData();
  const response = await fetch("https://fakestoreapi.com/products");
  const productList = await response.json();
  // console.log("products", productList);

  return (
    <div className="grid grid-cols-3 gap-3 max-w-5xl mx-auto">
      {productList.map((product: any) => (
        <div
          key={product?.id}
          className="flex flex-col w-[230px] items-center shadow-md"
        >
          <div className="w-48 h-48 overflow-hidden">
            <Image
              src={product?.image}
              alt={product.title}
              width={192}
              height={192}
              className="object-contain w-full h-full"
            />
          </div>
          <h2 className="mt-2 text-center font-medium">{product.title}</h2>
          <h3 className="text-center font-bold">${product.price}</h3>
          <AddCartButton data={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
