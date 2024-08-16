import { ProductList } from "@/components/product-list";

export default async function Home() {
  const response = await fetch("https://fakestoreapi.com/products");
  const productList = await response.json();
  return <ProductList productList={productList} />;
}

// return (
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
//     {productList.map((product: any) => (
//       <ProductCard1 product={product} key={product.id} />
//     ))}
//   </div>
// );
