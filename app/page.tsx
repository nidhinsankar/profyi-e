import { ProductList } from "@/components/product-list";

export default async function Home() {
  const response = await fetch("https://fakestoreapi.com/products");
  const productList = await response.json();
  return <ProductList productList={productList} />;
}
