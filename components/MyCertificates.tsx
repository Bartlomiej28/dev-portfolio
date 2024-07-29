import React from 'react'
import { HeroParallax } from "@/components/ui/hero-parallax";


export default function MyCertificates() {
  return (
    <div className="w-full h-full overflow-auto">
    <HeroParallax products={products} title="Certificates" description="In my journey as a front-end developer, I have actively sought out various courses and certifications to expand my knowledge and stay current with industry trends. Each certificate represents not just a new skill acquired, but a commitment to continuous learning and professional growth. These achievements highlight my dedication to mastering the latest technologies and best practices, ensuring that I deliver top-notch solutions and contribute effectively to any project."/>
  </div>
  )
}
export const products = [


  {
    title: "Cybersecurity z Politechniką Poznańską",
    link: "https://gomoonbeam.com",
    thumbnail: '/cyberSec_Santander.png'
      
  },
  {
    title: "Front End Development Libraries",
    link: "https://cursor.so",
    thumbnail:
      "/front_end_development_libraries_FCC.png",
  },
  {
    title: "JavaScript Algorithms and Data Structures (Beta)",
    link: "https://userogue.com",
    thumbnail:
      "/js_algorithms_and_data_structures_beta_FCC.png",
  },
  {
    title: "Legacy JavaScript Algorithms and Data Structures",
    link: "https://editorially.org",
    thumbnail:
      "/legacy_js_algorithms_and_data_structures_FCC.png",
  },
  


  {
    title: "Responsive Web Design",
    link: "https://editorially.org",
    thumbnail:
      "/responsive_web_design_FCC.png",
  },
  {
    title: "Scientific Computing with python",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "/scientific_computing_with_python_FCC.png",
  },

  {
    title: "SPA Front End Internet Applications z Politechniką Białostocką",
    link: "https://algochurn.com",
    thumbnail:
      "/spa_frontend_internet_applications_pb.png",
  },
  {
    title: "Website Development with Akademia Ekonomiczno Humanistyczna w Warszawie",
    link: "https://ui.aceternity.com",
    thumbnail:
      "/website_development_AEH.png",
  },

  


];

