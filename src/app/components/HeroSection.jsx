"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Dojos{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Free",
                1000,
                "Fun",
                1000,
                "Easy",
                1000,

                
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Take the 60-day self-hosting challenge and behold the many wonders of open-source technology.
          </p>
          <div>
            <Link
              href="https://blog.workdojos.com/#/portal/signup"
              rel="noopener noreferrer" 
              target="_blank"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Get a Dashboard
            </Link>
          </div>
          <div>
          <br></br>
          </div>
          <div>
            <Link
              href="https://dash.workdojos.com/business"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Browse
            </Link>
            
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="lg:w-[400px] lg:h-[300px] relative ">
            <Image
              style={{borderRadius: 20}}
              src="/images/394.gif"
              alt="A vintage tv depicting a tropical paradise"
              className=".img-container"
              width={394}
              height={394}
              unoptimized={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
