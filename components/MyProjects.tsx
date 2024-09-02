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
    title: "Copy of TikTok",
    link: "https://socialmediaapp-ruby.vercel.app/",
    thumbnail:
      "/tiktok_clone.png",
  },
  {
    title: "Copy of Spotify",
    link: "https://spotify-clone-xi-drab.vercel.app/",
    thumbnail:
      "/spotifyClone.png",
  },
  {
    title: "Copy of YouTube",
    link: "https://youtube-clone-lyart-pi.vercel.app/",
    thumbnail:
      "/youtubeClone.png",
  },
  {
    title: "Ecommerce shop",
    link: "https://online-shop-livid.vercel.app/",
    thumbnail:
      "/online_shop_nextjs.png",
  },
  {
    title: "Dev Portfolio",
    link: "https://dev-portfolio-xi-liard.vercel.app/",
    thumbnail:
      "/dev_portfolio.png",
  },
  {
    title: "MovieMania",
    link: "https://movie-mania-silk-omega.vercel.app/",
    thumbnail:
      "/moviemania.png",
  },
  {
    title: "Website",
    link: "https://website1-3.vercel.app/",
    thumbnail:
      "/website_1_3.png",
  },
];
