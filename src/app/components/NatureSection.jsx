"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const dojosData = [
  {
    id: 1,
    title: "Growers",
    description: "Get lit in more ways than one!  Marry technology with your love for weed.",
    image: "/images/projects/growers.webp",
    tag: ["All", "Horticulture"],
    gitUrl: "https://Growers.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Botanists",
    description: "Reign in the world of plants.  Create the ultimate botany hub using free technology.",
    image: "/images/projects/botanist.webp",
    tag: ["All", "Horticulture"],
    gitUrl: "https://Botanist.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Agriculturist",
    description: "Get a leg up in the field of farming with free technology that will knock your socks off!",
    image: "/images/projects/agriculturist.webp",
    tag: ["All", "Farming"],
    gitUrl: "https://Agriculturist.workdojos.com",
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
    <section id="nature">
            <br></br>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Sowing the seeds of the future
      </h2>
      <div className="text-white flex flex-flow justify-center items-center gap-2 pb-8">
        <ProjectTag
          onClick={handleTagChange}
          name="Farming"
          isSelected={tag === "Farming"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Horticulture"
          isSelected={tag === "Horticultre"}
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
