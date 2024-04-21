"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const dojosData = [
  {
    id: 1,
    title: "Law Enforcement",
    description: "Manage client relationships, track sales activities, and impress your customers with your own tech stack.",
    image: "/images/projects/lawenforcement.webp",
    tag: ["All", "Public Service"],
    gitUrl: "https://LawEnforcement.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Lawyers",
    description: "Create virtual lawyers at-the-ready powered by AI, tackle tough cases, and grow your business or law firm.",
    image: "/images/projects/litigator.webp",
    tag: ["All", "Law"],
    gitUrl: "https://Litigator.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Firefighters",
    description: "Create a local dashboard with everything you need to know about fire safety and real-time conditions.",
    image: "images/projects/firefighters.webp",
    tag: ["All", "Public Service"],
    gitUrl: "https://Firefighters.workdojos.com",
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
    <section id="legal">

      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Grow your Business
      </h2>
      <div className="text-white flex flex-flow justify-center items-center gap-2 pb-8">

        <ProjectTag
          onClick={handleTagChange}
          name="Admin"
          isSelected={tag === "Public"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Sales"
          isSelected={tag === "Law"}
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
