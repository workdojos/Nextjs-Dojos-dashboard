"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const dojosData = [
  {
    id: 1,
    title: "Animators",
    description: "Create stunning 3D animations using AI and bring your imagination to life.",
    image: "/images/projects/animators.webp",
    tag: ["All", "Design"],
    gitUrl: "https://Animators.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Bartenders",
    description: "Create a platform to share innovative drink recipes with fellow mixologists.",
    image: "/images/projects/bartenders.webp",
    tag: ["All", "Hospitality"],
    gitUrl: "https://Bartenders.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Exhibitionists",
    description: "Create immersive art installations, captivating audiences while fostering collaboration within the community.",
    image: "/images/projects/exhibitionist.webp",
    tag: ["All", "The Arts"],
    gitUrl: "https://Exhibitionists.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Graphic Designers",
    description: "Open-source technology can enable graphic designers to collaborate and experiment with cutting-edge design tools and frameworks, fostering a vibrant community for sharing resources, inspiration, and creative solutions.",
    image: "/images/projects/graphicdesigner.webp",
    tag: ["All", "Design"],
    gitUrl: "https://GraphicDesigner.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Jewelers",
    description: "Use open-source 3D printing software and hardware to create customizable jewelry designs, empowering jewelers to offer unique and personalized pieces to their customers at an affordable cost.",
    image: "images/projects/jeweler.webp",
    tag: ["All", "The Arts"],
    gitUrl: "https://Jeweler.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Musicians",
    description: "Create a collaborative open-source platform for actors, directors, and playwrights to share and co-create scripts, allowing for global collaboration and innovation in the world of theater. This platform could also facilitate virtual auditions and rehearsals, making theater accessible to a wider audience and fostering a vibrant online theater community.",
    image: "/images/projects/musicalartist.webp",
    tag: ["All", "Entertainment"],
    gitUrl: "https://MusicalArtist.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Thespians",
    description: "Create a collaborative open-source platform for actors, directors, and playwrights to share and co-create scripts, allowing for global collaboration and innovation in the world of theater. This platform could also facilitate virtual auditions and rehearsals, making theater accessible to a wider audience and fostering a vibrant online theater community.",
    image: "/images/projects/thespian.webp",
    tag: ["All", "The Arts"],
    gitUrl: "https://Thespian.workdojos.com",
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
    <section id="customers">
            <br></br>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Wow your Customers
      </h2>
      <div className="text-white flex flex-flow justify-center items-center gap-2 pb-8">
        <ProjectTag
          onClick={handleTagChange}
          name="Design"
          isSelected={tag === "Design"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Entertainment"
          isSelected={tag === "Entertainment"}
        />
        </div>
        <div className="text-white flex flex-flow justify-center items-center gap-2 pb-8">
        
        <ProjectTag
          onClick={handleTagChange}
          name="Hospitality"
          isSelected={tag === "Hospitality"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="The Arts"
          isSelected={tag === "The Arts"}
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
