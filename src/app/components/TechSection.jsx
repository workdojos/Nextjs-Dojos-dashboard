"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const dojosData = [
  {
    id: 2,
    title: "Web Designers",
    description: "Design the coolest websites and applications for free using open-source technology.",
    image: "/images/projects/webdesigners.webp",
    tag: ["All", "Design", "Development"],
    gitUrl: "https://WebDesigners.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Animators",
    description: "Host and create digital assets for your animation ideas (powered by self-hosted AI!).",
    image: "/images/projects/animators.webp",
    tag: ["All", "Design"],
    gitUrl: "https://Animators.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Content Creators",
    description: "Create and publish your work with an entire suite of free and self-hosted technology.",
    image: "/images/projects/contentcreators.webp",
    tag: ["All", "Design", "Development"],
    gitUrl: "https://ContentCreators.workdojos.com",
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
    <section id="tech">
            <br></br>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Health & Wellness
      </h2>
      <div className="text-white flex flex-flow justify-center items-center gap-2 pb-8">

        <ProjectTag
          onClick={handleTagChange}
          name="Health"
          isSelected={tag === "Design"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Wellness"
          isSelected={tag === "Development"}
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
