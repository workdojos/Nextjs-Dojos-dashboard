"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const dojosData = [
  {
    id: 2,
    title: "Interpreters",
    description: "Design the coolest websites and applications for free using open-source technology.",
    image: "/images/projects/interpreters.webp",
    tag: ["All", "Translation"],
    gitUrl: "https://Interpreters.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Travel Agents",
    description: "Collate your favorite travel destinations, tours, and travel info.  All for free!",
    image: "/images/projects/travelagents.webp",
    tag: ["All", "Exploration"],
    gitUrl: "https://travelagents.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Explorers",
    description: "Chart your next expedition with free and open-source mapping technology and go far.",
    image: "/images/projects/explorers.webp",
    tag: ["All", "Design", "Exploration"],
    gitUrl: "https://Explorers.workdojos.com",
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
    <section id="travel">
            <br></br>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        For the digital nomad extraordinaire
      </h2>
      <div className="text-white flex flex-flow justify-center items-center gap-2 pb-8">

        <ProjectTag
          onClick={handleTagChange}
          name="Exploration"
          isSelected={tag === "Exploration"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Translation"
          isSelected={tag === "Translation"}
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
