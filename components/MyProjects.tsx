import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function MyProjects() {
  return <div className="w-full h-full overflow-auto">
    <HeroParallax products={products} title="Advanced apps and websites" description="Each project has been an opportunity for me to learn and improve my skills as a frontend developer. 
        Creating advanced applications and websites is a pleasure and a natural step in my career. 
        Every project you see here is a testament to my passion for coding and my pursuit of perfection in every detail." items={items}/>
  </div>;
}

export const items = []

export const products = [
  {
    title: "Ecommerce shop",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/online_shop_nextjs.png",
  },
  {
    title: "Copy of TikTok",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/tiktok_clone.png",
  },
  {
    title: "Website",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/website_1_3.png",
  },
  {
    title: "Ecommerce shop",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/online_shop_nextjs.png",
  },



  {
    title: "MovieMania",
    link: "https://editrix.ai",
    thumbnail:
      "/moviemania.png",
  },
  {
    title: "Website",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/website_1_3.png",
  },
  {
    title: "Dev Portfolio",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "/dev_portfolio.png",
  },
  {
    title: "MovieMania",
    link: "https://editrix.ai",
    thumbnail:
      "/moviemania.png",
  },

  {
    title: "Ecommerce shop",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/online_shop_nextjs.png",
  },
  {
    title: "Dev Portfolio",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "/dev_portfolio.png",
  },
  {
    title: "Ecommerce shop",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/online_shop_nextjs.png",
  },
  {
    title: "Copy of TikTok",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/tiktok_clone.png",
  },
];
