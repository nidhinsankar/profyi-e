import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="max-w-5xl mx-auto flex justify-between py-5">
      <div>
        <Link href={"/"}>
          <h2>Profyi-e</h2>
        </Link>
      </div>
      <div>
        <Link href={"/cart"} className="py-2 px-4 mx-2 bg-black text-white">
          Cart
        </Link>
        <Link href={"/products"} className="py-2 px-4 bg-black text-white">
          products
        </Link>
      </div>
    </nav>
  );
};
