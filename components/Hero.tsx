"use client";
 
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import rafonix from '@/data/rafonix.jpg'
import Image from "next/image";
export function Hero() {
  return (
    <AuroraBackground id="home">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="flex flex-row gap-8 items-center">
          <div>
            <Image src={rafonix} width={600} height={600} alt="myPhoto" className="rounded-full w-96 h-96"/>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <p className="text-sm font-bold">Hello, I'm</p>
            <p className="text-5xl font-bold">Bartłomiej Boczyło</p>
            <p className="text-3xl">Frontend Developer</p>
            <div className="flex flex-row gap-4 mt-2">
              <button className="w-36 px-4 py-2 text-[#343434] border border-[#343434] rounded-full">Download CV</button>
              <a href="#contact" className="w-36 px-4 py-2 text-white bg-[#343434] rounded-full text-center">Contact</a>
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}


/*
<div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Background lights are cool you know.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          And this, is chemical burn.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Debug now
        </button>
        */