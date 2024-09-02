import React from 'react';
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function MyCertificates() {
  const certifications = [
    "Cybersecurity with Politechnika Poznańska",
    "Front End Development Libraries, FreeCodeCamp",
    "JavaScript Algorithms and Data Structures (Beta), FreeCodeCamp",
    "Legacy JavaScript Algorithms and Data Structures, FreeCodeCamp",
    "Responsive Web Design, FreeCodeCamp",
    "Scientific Computing with Python, FreeCodeCamp",
    "SPA Front End Internet Applications with Politechnika Białostocka",
    "Website Development with Akademia Ekonomiczno Humanistyczna w Warszawie",
    "Basics of JavaScript with University of Gdańsk"
  ];

  return (
    <div className="w-full h-full overflow-auto">
      <HeroParallax
        products={products}
        title="Certificates"
        description="In my journey as a front-end developer, I have actively sought out various courses and certifications to expand my knowledge and stay current with industry trends. Each certificate represents not just a new skill acquired, but a commitment to continuous learning and professional growth. These achievements highlight my dedication to mastering the latest technologies and best practices, ensuring that I deliver top-notch solutions and contribute effectively to any project."
        items={certifications}
      />
    </div>
  );
}

export const products = [
  {
    title: "Dyplom zawodowy",
    link: "",
    thumbnail: "/001.jpg",
  },
  {
    title: "Certyfikat kwalifikacji zawodowej INF.03",
    link: "",
    thumbnail: "/002.jpg",
  },
  {
    title: "Certyfikat kwalifikacji zawodowej INF.04",
    link: "",
    thumbnail: "/003.jpg",
  },
  {
    title: "Front End Development Libraries",
    link: "",
    thumbnail: "/front_end_development_libraries_FCC.png",
  },
  {
    title: "Legacy JavaScript Algorithms and Data Structures",
    link: "",
    thumbnail: "/legacy_js_algorithms_and_data_structures_FCC.png",
  },
  {
    title: "JavaScript Algorithms and Data Structures (Beta)",
    link: "",
    thumbnail: "/js_algorithms_and_data_structures_beta_FCC.png",
  },
  {
    title: "Responsive Web Design",
    link: "",
    thumbnail: "/responsive_web_design_FCC.png",
  },
  {
    title: "SPA Front End Internet Applications with Politechnika Białostocka",
    link: "",
    thumbnail: "/spa_frontend_internet_applications_pb.png",
  },
  {
    title: "Website Development with Akademia Ekonomiczno Humanistyczna w Warszawie",
    link: "",
    thumbnail: "/website_development_AEH.png",
  },
  {
    title: "Basics of JavaScript with University of Gdańsk",
    link: "",
    thumbnail: "/basics_of_js_ug.png",
  },
  {
    title: "Cybersecurity with Politechnika Poznańska",
    link: "",
    thumbnail: '/cyberSec_Santander.png'
  },
  {
    title: "Scientific Computing with Python",
    link: "",
    thumbnail: "/scientific_computing_with_python_FCC.png",
  },
  


  



];
