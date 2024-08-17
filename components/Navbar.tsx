import Image from "next/image";
import Link from "next/link";
import { Cart } from "./cart";
import { cn } from "@/lib/utils";
import Search from "./search";

export const Navbar = () => {
  return (
    <nav
      className={cn(
        "max-w-[360px] md:max-w-5xl mx-auto flex justify-between items-center py-3 bg-secondary/70 md:my-6 rounded-2xl px-4 md:px-9 sticky top-5 z-20"
      )}
    >
      <div>
        <Link href={"/"}>
          <h2 className="font-bold text-xl ">
            Pro<span className="text-primary">fyi</span>-e
          </h2>
          {/* <Image
            src={"/Profyi-e.png"}
            width={50}
            height={50}
            className="w-24 h-24"
            objectFit="cover"
            alt="profyi-e"
          /> */}
        </Link>
      </div>
      <div className="flex items-center">
        <div className="hidden sm:block">
          <Search />
        </div>
        <Link
          href={"/cart"}
          className=" mx-2 w-14 h-14 rounded-xl flex justify-center items-center relative bg-dark-blue"
        >
          <Image
            src={"/cart.svg"}
            alt="cart"
            width={0}
            height={0}
            className="w-10 h-10"
          />
          <Cart />
        </Link>
      </div>
    </nav>
  );
};
