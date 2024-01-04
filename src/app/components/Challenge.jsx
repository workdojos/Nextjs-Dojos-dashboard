"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "The Why",
    id: "why",
    content: (
      <ul className="list-disc pl-2">
        <li>Data privacy</li>
        <li>Team collaboration</li>
        <li>Increased productivity</li>        
        <li>The ultimate business-builder</li>
        <li>Opportunity for endless learning</li>
        <li>Gateway to millions of open-source tools</li>
        <li>Templates (Next.js, React, Hugo, and more)</li>
        <li>An entire suite of blockbuster apps pre-installed</li>
        <li>Absolute maximum value on raw cloud computing</li>
        <li>The purest technological foundation upon which you can build ANYTHING</li>


      </ul>
    ),
  },
  {
    title: "rewards",
    id: "rewards",
    content: (
      <ul className="list-disc pl-2">
        
        
        <li>A website (Wordpress, Ghost, Hugo, Next.js)</li>
        <li>A blog (newsletters and payments built in)</li>
        <li>Chat app (Rocket.chat, Databag, more)</li>
        <li>Portfolio template built with Next.js</li>
        <li>Community co-founder matching</li>
        <li>Dozens of custom dashboards</li>
        <li>Private cloud storage (50GB)</li>
        <li>Family media server</li>
        <li>Root access</li>


      </ul>
    ),
  
    
  
  },
  {
    title: "Objectives",
    id: "objectives",
    content: (
      <ul className="list-disc pl-2">
        <li>Take the helm as System Administrator</li>
        <li>Tour your suite of pre-installed apps</li>
        <li>Invite family, friends, colleagues</li>
        <li>Collaborate</li>
        <li>Build</li>
      </ul>
    ),
  },
  {
    title: "Future",
    id: "future",
    content: (
      <ul className="list-disc pl-2">
        <li>Your own business, side-gig, or hobby</li>
        <li>Digital self-sufficiency</li>
        <li>Complete data privacy</li>
        <li>AI at your fingertips</li>
        <li>Paying subscribers</li>
        <li>An audience</li>
        <li>Influence</li>
        <li>Change</li>
        <li>Power</li>
      </ul>
      ),
  },  
    {
      title: "Costs",
      id: "costs",
      content: (
        <ul className="list-disc pl-2">
          <li>Completely free for 60 days (we subsidize 100% of your server costs)</li>
          <li>After 60 days:  $7/mo (4-core CPU, 8GB RAM, 50GB storage)</li>
          <li>Try risk-free and have fun with it!</li>
        </ul>
      ),
    },

];

const AboutSection = () => {
  const [tab, setTab] = useState("why");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-6 sm:py-16 xl:px-16">
        <Image style={{ borderRadius: 16}}src="/images/spark2.gif" width={307} height={307}   />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">The 60-Day Self-Hosting Challenge</h2>



          <p className="text-base lg:text-lg">
            We will subsidize the cost of your Dojo for a full 60 days.  No strings attached.  Give the many wonders of open-source tech a try.  You will be absolutely amazed at what you can do for yourself, your family, business, and overall digital well-being.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("why")}
              active={tab === "why"}
            >
              {" "}
              The Why{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("objectives")}
              active={tab === "objectives"}
            >
              {" "}
              Objectives{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("rewards")}
              active={tab === "rewards"}
            >
              {" "}
              Rewards{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("future")}
              active={tab === "future"}
            >
              {" "}
              The Future{" "}
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
