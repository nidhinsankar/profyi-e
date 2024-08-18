import Image from "next/image";
import Link from "next/link";
import { Cart } from "./cart";
import { cn } from "@/lib/utils";
import Search from "./search";

export const Navbar = () => {
  return (
    <div className="bg-secondary/70 backdrop-blur-2xl sticky top-0 z-20 py-3">
      <nav
        className={cn(
          "w-[90%] md:max-w-5xl mx-auto flex justify-between items-center  "
        )}
      >
        <div>
          <Link href={"/"} className="flex items-center gap-3">
            <Image
              src={"/cart-logo.svg"}
              width={20}
              height={20}
              alt="profyi-e"
            />
            <h2 className="font-bold text-xl ">
              Pro<span className="text-primary">fyi</span>-e
            </h2>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Search />
          </div>
          <Link
            href={"/cart"}
            className=" mx-2 w-10 h-10 rounded-xl flex justify-center items-center relative bg-dark-blue/20 hover:bg-dark-blue/45"
          >
            <Image
              src={"/cart.svg"}
              alt="cart"
              width={0}
              height={0}
              className="w-5 h-5"
            />
            <Cart />
          </Link>
        </div>
      </nav>
    </div>
  );
};
