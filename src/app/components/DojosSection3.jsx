"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const dojosData = [
  {
    id: 2,
    title: "Doctors",
    description: "Provide remote consultations and collaborate with colleagues globally, facilitating knowledge sharing for better patient outcomes.",
    image: "/images/projects/clinician.webp",
    tag: ["All", "Health"],
    gitUrl: "https://Clinician.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Nurses",
    description: "Spin up a platform for collaborative task tracking, empowering nurses to efficiently manage patients.",
    image: "/images/projects/registerednurse.webp",
    tag: ["All", "Health"],
    gitUrl: "https://RegisteredNurse.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Social Workers",
    description: "Share resources, case studies, and best practices, fostering a global community of social workers making an impact.",
    image: "/images/projects/socialworker.webp",
    tag: ["All", "Wellness"],
    gitUrl: "https://SocialWorker.workdojos.com",
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
    <section id="health">
            <br></br>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Health & Wellness
      </h2>
      <div className="text-white flex flex-flow justify-center items-center gap-2 pb-8">

        <ProjectTag
          onClick={handleTagChange}
          name="Health"
          isSelected={tag === "Health"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Wellness"
          isSelected={tag === "Wellness"}
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
