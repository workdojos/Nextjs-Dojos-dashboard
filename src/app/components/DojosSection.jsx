"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const dojosData = [
  {
    id: 1,
    title: "Account Executive",
    description: "Manage client relationships, track sales activities, and impress your customers with your own tech stack.",
    image: "/images/projects/accountexecutive.webp",
    tag: ["All", "Sales"],
    gitUrl: "https://AccountExecutive.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Administrators",
    description: "Spin up free apps to accelerate task management, productivity, and collaboration for teams.",
    image: "/images/projects/administrator.webp",
    tag: ["All", "Admin"],
    gitUrl: "https://Administrators.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Digital Marketers",
    description: "Get a competitive (and cost-effective) edge for all things digital.",
    image: "images/projects/digitalmarketers.webp",
    tag: ["All", "Sales"],
    gitUrl: "https://DigitalMarketers.workdojos.com",
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
          name="Admin"
          isSelected={tag === "Admin"}
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
};

export default DojosSection;
