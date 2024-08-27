import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Header } from "./Header";

interface HeroParallaxProps {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
  title: string;
  description: string;
  items: string[];
}

export const HeroParallax: React.FC<HeroParallaxProps> = ({
  products,
  title,
  description,
  items,
}) => {
  return (
    <div className="h-full py-10 overflow-auto antialiased relative flex flex-col self-auto">
      <Header title={title} description={description} items={items} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
}) => {
  return (
    <motion.div
      whileHover={{
        y: -20,
      }}
      className="group/product h-72 sm:h-96 w-full relative flex-shrink-0"
    >
      <Link href={product.link} className="block group-hover/product:shadow-2xl">
        <Image
          src={product.thumbnail}
          height="1000"
          width="1000"
          className="w-full h-full object-cover object-center absolute inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
