"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const dojosData = [
  {
    id: 1,
    title: "Biologists",
    description: "Use open-source technology to develop a collaborative platform for biologists, enabling real-time data sharing and analysis, fostering global scientific collaboration and accelerating breakthrough discoveries.",
    image: "/images/projects/biologist.webp",
    tag: ["All", "Science"],
    gitUrl: "https://Biologists.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Data Scientists",
    description: "Use an open-source data visualization tool to create interactive, dynamic dashboards that showcase complex data insights, enhancing data scientists' ability to communicate findings effectively and engage stakeholders.",
    image: "/images/projects/datascientists.webp",
    tag: ["All", "Science"],
    gitUrl: "https://DataScientists.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "School Teachers",
    description: "Open-source technology can be used by school teachers to create interactive educational games that engage students and promote collaborative learning experiences, fostering a fun and dynamic classroom environment.",
    image: "/images/projects/schoolteachers.webp",
    tag: ["All", "Education"],
    gitUrl: "https://SchoolTeachers.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Theologians",
    description: "Create an open-source theological discussion platform where theologians can collaborate, share insights, and debate religious doctrines openly, fostering a global community of diverse perspectives and knowledge exchange.",
    image: "/images/projects/theologian.webp",
    tag: ["All", "Religion"],
    gitUrl: "https://Theologian.workdojos.com",
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
    <section id="knowledge">
            <br></br>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        The Pursuit of Knowledge
      </h2>
      <div className="text-white flex flex-flow justify-center items-center gap-2 pb-8">
        <ProjectTag
          onClick={handleTagChange}
          name="Education"
          isSelected={tag === "Education"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Science"
          isSelected={tag === "Science"}
        />
        </div>
        <div className="text-white flex flex-flow justify-center items-center gap-2 pb-8">
        
        <ProjectTag
          onClick={handleTagChange}
          name="Religion"
          isSelected={tag === "Religion"}
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
