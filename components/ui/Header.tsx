import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}

export const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        {title}
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        {description}
      </p>
    </div>
  );
};