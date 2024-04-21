"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const dojosData = [
  {
    id: 7,
    title: "Beauticians",
    description: "Up your beautician services game with a tech stack to wow the world.",
    image: "/images/projects/beauticians.webp",
    tag: ["All", "Beauty"],
    gitUrl: "https://Beauticians.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Baristas",
    description: "Create a community and share the inside scoop on all things coffee.",
    image: "/images/projects/baristas.webp",
    tag: ["All", "Beverage"],
    gitUrl: "https://Baristas.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Bartenders",
    description: "Back up your mixology skills with an online recipe manager for free.",
    image: "/images/projects/bartenders.webp",
    tag: ["All", "Beverage"],
    gitUrl: "https://Bartenders.workdojos.com",
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
    <section id="hospitality">
            <br></br>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Wow your Customers
      </h2>
      <div className="text-white flex flex-flow justify-center items-center gap-2 pb-8">
        <ProjectTag
          onClick={handleTagChange}
          name="Entertainment"
          isSelected={tag === "Beauty"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="The Arts"
          isSelected={tag === "Beverage"}
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
