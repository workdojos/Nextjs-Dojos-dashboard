"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const dojosData = [
  {
    id: 1,
    title: "Animators",
    description: "Use open-source animation software like Blender to create stunning 3D animations and collaborate with a global community of animators, accessing a vast library of free assets, plugins, and tutorials to bring your imagination to life.",
    image: "/images/projects/animators.webp",
    tag: ["All", "Design"],
    gitUrl: "https://og.admins.live/#Animators",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Art Galleries",
    description: "Create an open-source digital platform that allows art gallery owners to curate virtual exhibitions, enabling global audiences to explore and engage with art from the comfort of their homes while fostering collaboration among artists and collectors.",
    image: "/images/projects/artgalleries.webp",
    tag: ["All", "The Arts"],
    gitUrl: "https://og.admins.live/#Art-Galleries",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Bartenders",
    description: "Open-source technology can be used by bartenders to create a community-driven cocktail recipe database, allowing them to access and share innovative drink recipes with fellow mixologists for endless creativity and collaboration.",
    image: "/images/projects/bartenders.webp",
    tag: ["All", "Hospitality"],
    gitUrl: "https://og.admins.live/#Bartenders",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Cafes",
    description: "Open-source technology can be used by cafe owners to implement a self-service coffee ordering system with customizable recipes and automated inventory management, enhancing customer experience and operational efficiency.",
    image: "/images/projects/cafes.webp",
    tag: ["All", "Hospitality"],
    gitUrl: "https://og.admins.live/#Cafes",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Coffeeshops",
    description: "Use open-source technology to create a customizable coffee ordering app, allowing customers to personalize their drinks and pay seamlessly, enhancing their coffee shop experience while reducing operational costs.",
    image: "images/projects/coffeeshops.webp",
    tag: ["All", "Hospitality"],
    gitUrl: "https://og.admins.live/#Coffeeshops",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Content Creators",
    description: "Open-source technology allows content creators to leverage collaborative editing platforms, enabling real-time collaboration and version control, fostering creativity and efficiency in content production.",
    image: "/images/projects/contentcreators.webp",
    tag: ["All", "Entertainment"],
    gitUrl: "https://og.admins.live/#Content-Creators",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Exhibitionists",
    description: "Open-source augmented reality (AR) software enables exhibitionists to create immersive and interactive art installations, captivating audiences with personalized experiences while fostering collaboration and creativity within the community.",
    image: "/images/projects/exhibitionist.webp",
    tag: ["All", "The Arts"],
    gitUrl: "https://og.admins.live/#Exhibitionists",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Gamers",
    description: "Use open-source technology to create a collaborative game development platform where gamers can collectively design and modify game levels, fostering an inclusive and creative gaming community.",
    image: "/images/projects/videogamers.webp",
    tag: ["All", "Entertainment"],
    gitUrl: "https://og.admins.live/#Gamers",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Graphic Designers",
    description: "Open-source technology can enable graphic designers to collaborate and experiment with cutting-edge design tools and frameworks, fostering a vibrant community for sharing resources, inspiration, and creative solutions.",
    image: "/images/projects/graphicdesigner.webp",
    tag: ["All", "Design"],
    gitUrl: "https://og.admins.live/#Graphic-Designers",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Jewelers",
    description: "Use open-source 3D printing software and hardware to create customizable jewelry designs, empowering jewelers to offer unique and personalized pieces to their customers at an affordable cost.",
    image: "images/projects/jeweler.webp",
    tag: ["All", "The Arts"],
    gitUrl: "https://og.admins.live/#Jewelers",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Musicians",
    description: "Create a collaborative open-source platform for actors, directors, and playwrights to share and co-create scripts, allowing for global collaboration and innovation in the world of theater. This platform could also facilitate virtual auditions and rehearsals, making theater accessible to a wider audience and fostering a vibrant online theater community.",
    image: "/images/projects/musicalartist.webp",
    tag: ["All", "Entertainment"],
    gitUrl: "https://og.admins.live/#Musicians",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Thespians",
    description: "Create a collaborative open-source platform for actors, directors, and playwrights to share and co-create scripts, allowing for global collaboration and innovation in the world of theater. This platform could also facilitate virtual auditions and rehearsals, making theater accessible to a wider audience and fostering a vibrant online theater community.",
    image: "/images/projects/thespian.webp",
    tag: ["All", "The Arts"],
    gitUrl: "https://og.admins.live/#Thespians",
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
