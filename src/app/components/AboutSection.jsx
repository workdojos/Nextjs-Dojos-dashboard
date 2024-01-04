"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Features",
    id: "features",
    content: (
      <ul className="list-disc pl-2">
        <li>Website, blog, chat app, wiki included for free</li>
        <li>Industry-Specific Insights</li>
        <li>Workmates hiring hives</li>
        <li>Job scraping</li>
        <li>AI content creation</li>
        <li>AI cover letter generation</li>
        <li>Automation</li>
        <li>Chat</li>
        <li>Docker</li>
        <li>Templates (Next.js, React, Hugo, and more)</li>
      </ul>
    ),
  },
  {
    title: "uses",
    id: "uses",
    content: (
      <ul className="list-disc pl-2">
        
        
        <li>Build a website (included)</li>
        <li>Start a blog (included)</li>
        <li>Start a social network (included)</li>
        <li>Spin up a dashboard (included)</li>
        <li>Deliver online courses (included)</li>
        <li>Share files securely (included)</li>
        <li>Set up a family media server</li>
        <li>Create a development environment</li>
        <li>Automate content creation with AI</li>


      </ul>
    ),
  
    
  
  },
  {
    title: "Apps",
    id: "apps",
    content: (
      <ul className="list-disc pl-2">
        <li>Wordpress</li>
        <li>Rocket.chat</li>
        <li>Ghost</li>
        <li>Organizr</li>
        <li>Databag</li>
        <li>Moodle</li>
        <li>Nextcloud</li>
        <li>100&apos;s more</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>System administration</li>
        <li>Web development</li>
        <li>UI/UX design</li>
        <li>Automation</li>
        <li>Digital Marketing</li>
        <li>Teaching</li>
        <li>AI</li>
      </ul>
      ),
  },  
    {
      title: "Vision",
      id: "vision",
      content: (
        <ul className="list-disc pl-2">
          <li>Data privacy</li>
          <li>Technological self-sufficiency</li>
          <li>Ultimate sandboxing</li>
          <li>Maximum value</li>
          <li>Open-source</li>
          <li>Affordable</li>
          <li>Approachable</li>
        </ul>
      ),
    },
    {
      title: "Costs",
      id: "costs",
      content: (
        <ul className="list-disc pl-2">
          <li>$7/mo (4-core CPU, 8GB RAM, 50GB storage)</li>
        </ul>
      ),
    },

];

const AboutSection = () => {
  const [tab, setTab] = useState("features");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image style={{ borderRadius: 16}}src="/images/neon.webp" width={500} height={500}   />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">A Digital Home Away From Home</h2>



          <p className="text-base lg:text-lg">
            Get maximum value from your own personal cloud.  Dojos is &quot;your place, your way&quot;, and it costs less than 25 cents a day.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("features")}
              active={tab === "features"}
            >
              {" "}
              Features{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("apps")}
              active={tab === "apps"}
            >
              {" "}
              Apps{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("uses")}
              active={tab === "uses"}
            >
              {" "}
              Uses{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("vision")}
              active={tab === "vision"}
            >
              {" "}
              Vision{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("costs")}
              active={tab === "costs"}
            >
              {" "}
              Costs{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
