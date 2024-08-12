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
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  const productList = await response.json();
  console.log("products", productList);

  return (
    <div className="grid grid-cols-3 gap-3 max-w-5xl mx-auto">
      {productList.map((product: any) => (
        <div key={product?.id} className="border w-[250px]">
          <h2>{product.title}</h2>
          <h3>{product.price}</h3>
          <Image
            src={product?.image}
            alt="product image"
            width={300}
            height={100}
            objectFit="cover"
            className="w-full"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
