import { AddCartButton } from "@/components/button/add-cart";
import ProductCard, { ProductCard1 } from "@/components/product-card";
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
      {productList.map((product: any) => (
        <ProductCard1 product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsPage;
