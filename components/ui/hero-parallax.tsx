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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
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
        y: -10,
      }}
      className="group h-full w-full relative flex-shrink-0"
    >
      <Link href={product.link} className="block relative">
        <Image
          src={product.thumbnail}
          height={400} // Ustal odpowiednie wysokości
          width={400}  // Ustal odpowiednie szerokości
          className="w-full h-full object-cover"
          alt={product.title}
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        <h2 className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {product.title}
        </h2>
      </Link>
    </motion.div>
  );
};
