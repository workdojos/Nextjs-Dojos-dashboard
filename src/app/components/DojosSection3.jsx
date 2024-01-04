"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const dojosData = [
  {
    id: 1,
    title: "Growers",
    description: "Use open-source sensor technology to create a smart greenhouse system that monitors temperature, humidity, and light levels, providing real-time data and automated adjustments for optimal cannabis growth, maximizing yield and reducing costs.",
    image: "/images/projects/growers.webp",
    tag: ["All", "Health & Wellness"],
    gitUrl: "https://og.admins.live/#Growers",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Doctors",
    description: "Use open-source telemedicine platforms to enable doctors to provide remote consultations and collaborate with colleagues globally, improving accessibility to healthcare and facilitating knowledge sharing for better patient outcomes.",
    image: "/images/projects/clinician.webp",
    tag: ["All", "Health & Wellness"],
    gitUrl: "https://og.admins.live/#Doctors",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Explorers",
    description: "Open-source technology can be used by explorers to create a collaborative mapping platform that allows individuals to share real-time discoveries and navigate uncharted territories, fostering global exploration and discovery.",
    image: "/images/projects/explorers.webp",
    tag: ["All", "Travel"],
    gitUrl: "https://og.admins.live/#Explorers",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Life Coaches",
    description: "Open-source technology can be utilized by life coaches to develop a collaborative online platform that offers personalized goal tracking and interactive coaching sessions, fostering client engagement and promoting self-improvement.",
    image: "/images/projects/lifecoaches.webp",
    tag: ["All", "Health & Wellness"],
    gitUrl: "https://og.admins.live/#Life-Coaches",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Neighbors",
    description: "Neighborhood volunteers can use open-source technology to create a community-driven platform for sharing resources and organizing events, fostering collaboration and empowerment within the local community.",
    image: "images/projects/neighborly.webp",
    tag: ["All", "Public Services"],
    gitUrl: "https://og.admins.live/#Neighbors",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Park Rangers",
    description: "Open-source technology can be used by park rangers to develop a mobile app that enables visitors to identify local flora and fauna, fostering environmental awareness and engagement.",
    image: "/images/projects/parkranger.webp",
    tag: ["All", "Public Services"],
    gitUrl: "https://og.admins.live/#Park-Rangers",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Pharmacists",
    description: "Open-source technology can be used by pharmacists to develop a collaborative medication management platform that enables real-time sharing of drug interactions and personalized treatment recommendations, improving patient safety and healthcare outcomes.",
    image: "/images/projects/pharmacists.webp",
    tag: ["All", "Health & Wellness"],
    gitUrl: "https://og.admins.live/#Pharmacists",
    previewUrl: "/images/projects/academies.jpg",
  },
  {
    id: 8,
    title: "Physical Therapists",
    description: "Open-source technology can be used by Registered Nurses to develop a collaborative mobile app that enables real-time communication and information sharing among healthcare professionals, improving patient care coordination and efficiency.",
    image: "/images/projects/physicaltherapist.webp",
    tag: ["All", "Health & Wellness"],
    gitUrl: "https://og.admins.live/#Physical-Therapists",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Nurses",
    description: "Open-source project management software provides collaborative task tracking and real-time updates, empowering project managers to efficiently coordinate teams and streamline project workflows.",
    image: "/images/projects/registerednurse.webp",
    tag: ["All", "Health & Wellness"],
    gitUrl: "https://og.admins.live/#Nurses",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Social Workers",
    description: "Open-source technology can be used by social workers to develop a collaborative platform for sharing resources, case studies, and best practices, fostering a global community of practitioners. This platform could also incorporate AI-powered analytics to identify trends and patterns, enabling data-driven decision-making and improving social interventions. By leveraging open-source technology, social workers can enhance their impact and create a more connected and effective support system for vulnerable populations.",
    image: "/images/projects/socialworker.webp",
    tag: ["All", "Public Services"],
    gitUrl: "https://og.admins.live/#Social-Workers",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Travel Agents",
    description: "Use open-source technology to build a travel itinerary generator that suggests personalized destinations, accommodations, and activities based on user preferences, leveraging crowd-sourced reviews and real-time data. This tool can streamline the travel planning process, enhance customer satisfaction, and enable Travel Agents to offer unique and tailored experiences to their clients.",
    image: "images/projects/travelagents.webp",
    tag: ["All", "Travel"],
    gitUrl: "https://og.admins.live/#Travel-Agents",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Yoga Instructors",
    description: "Open-source technology can be used by Yoga Instructors to develop a customizable virtual reality (VR) yoga experience, allowing students to practice in immersive virtual environments with real-time feedback and guidance, enhancing their yoga journey and accessibility to the practice.",
    image: "/images/projects/yogainstructor.webp",
    tag: ["All", "Health & Wellness"],
    gitUrl: "https://og.admins.live/#Yoga-Instructors",
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
        Health & Happiness
      </h2>
      <div className="text-white flex flex-flow justify-center items-center gap-2 pb-8">
        <ProjectTag
          onClick={handleTagChange}
          name="Health & Wellness"
          isSelected={tag === "Marketing"}
        />
        </div>
        <div className="text-white flex flex-flow justify-center items-center gap-2 pb-8">
        
        <ProjectTag
          onClick={handleTagChange}
          name="Travel"
          isSelected={tag === "Travel"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Public Services"
          isSelected={tag === "Public Services"}
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
