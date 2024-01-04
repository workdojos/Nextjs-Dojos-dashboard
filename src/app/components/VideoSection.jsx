"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";


const dojosData = [
  {
    id: 1,
    title: "Account Executive",
    description: "As an Account Executive, leverage open-source CRM software to seamlessly manage client relationships, track sales activities, and analyze data, enhancing sales effectiveness and productivity.",
    image: "/images/projects/accountexecutive.webp",
    tag: ["All", "Sales"],
    gitUrl: "https://og.admins.live/#Account-Executives-Dojo",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Administrators",
    description: "Open-source technology can be used by administrators to create a collaborative task management platform, allowing teams to efficiently coordinate and track their progress while fostering a sense of shared responsibility and engagement.",
    image: "/images/projects/administrator.webp",
    tag: ["All", "Admin"],
    gitUrl: "https://og.admins.live/#Administrators",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Clerks",
    description: "As a clerk, you can utilize open-source technology to automate document management and streamline administrative tasks, improving efficiency and reducing manual workload.",
    image: "/images/projects/clerk.webp",
    tag: ["All", "Sales"],
    gitUrl: "https://og.admins.live/#Clerks",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Digital Marketers",
    description: "Utilizing open-source social media analytics tools, digital marketers can gain valuable insights on audience behavior, optimize campaigns, and measure the impact of their strategies, all while saving costs and fostering collaboration within the marketing team.",
    image: "images/projects/digitalmarketers.webp",
    tag: ["All", "Marketing"],
    gitUrl: "https://og.admins.live/#Digital-Marketers",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Lead Generators",
    description: "Open-source technology can be used by lead generators to build a customizable chatbot that automates lead qualification and captures valuable customer information, enhancing efficiency and improving lead generation efforts.",
    image: "/images/projects/leadgenerator.webp",
    tag: ["All", "Marketing"],
    gitUrl: "https://og.admins.live/#Lead-Generators",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Public Relations",
    description: "PR Representative: Utilizing open-source technology, create a dynamic media monitoring dashboard that consolidates real-time news mentions and social media analytics, enabling PR representatives to track and analyze brand sentiment and campaign effectiveness more efficiently.",
    image: "/images/projects/publicrelations.webp",
    tag: ["All", "Comms"],
    gitUrl: "https://og.admins.live/#Public-Relations",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Project Managers",
    description: "Open-source project management software provides collaborative task tracking and real-time updates, empowering project managers to efficiently coordinate teams and streamline project workflows.",
    image: "/images/projects/projectmanagers.webp",
    tag: ["All", "Admin"],
    gitUrl: "https://og.admins.live/#Project-Managers",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Sales Coaches",
    description: "Create an open-source virtual sales training platform that combines interactive simulations and AI-powered coaching to enhance sales coaching effectiveness, empowering sales coaches to train and mentor their teams remotely with engaging, personalized experiences.",
    image: "images/projects/salescoaches.webp",
    tag: ["All", "Sales"],
    gitUrl: "https://og.admins.live/#Sales-Coaches",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Telemarketers",
    description: "Open-source technology can be utilized by telemarketers to create a personalized voice-bot assistant that dynamically adapts its responses based on caller preferences, enhancing customer engagement and satisfaction. This intelligent system can be further integrated with CRM platforms and analytics tools to optimize lead conversion rates and improve overall telemarketing performance.",
    image: "/images/projects/telemarketer.webp",
    tag: ["All", "Sales"],
    gitUrl: "https://og.admins.live/#Telemarketers",
    previewUrl: "/",

  },
  
];

const DojosSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = dojosData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="business">

      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Grow your Business
      </h2>
      <div className="text-white flex flex-flow justify-center items-center gap-2 pb-8">
        <ProjectTag
          onClick={handleTagChange}
          name="Marketing"
          isSelected={tag === "Marketing"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Admin"
          isSelected={tag === "Admin"}
        />
        </div>
        <div className="text-white flex flex-flow justify-center items-center gap-2 pb-8">
        
        <ProjectTag
          onClick={handleTagChange}
          name="Comms"
          isSelected={tag === "Communications"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Sales"
          isSelected={tag === "Sales"}
        />
        </div>
  
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>

  );


}
export default DojosSection;
