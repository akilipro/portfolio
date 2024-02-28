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
          <h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-200">
              Hello, I&apos;m{" "} 
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Bienvenu Mwenyemali",
                1000,
                "Fullstack Developer",
                1000,
                "Mobile Developer",
                1000,
                "IT Specialist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am a freelance professional and CEO of AKILI GROUP Company, working alongside a skilled team of IT experts. Together, we deliver top-notch solutions, drawing on our collective experience and dedication to exceed client expectations.
            </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-700 to-blue-200 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://profile-file-service-temp-prod.s3.us-west-2.amazonaws.com/954823662_82280bd3-6543-4570-b735-e61aae20f5fb?response-content-disposition=attachment%3Bfilename%3DBienvenu-Mwenyemali.pdf&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240227T111647Z&X-Amz-SignedHeaders=host&X-Amz-Credential=AKIAZKXXDXTXZF2KYWCD%2F20240227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Expires=300&X-Amz-Signature=dfad221a849972c9af08343286aa95d4be5a4844ce1749f0729c2d2e5bbdc45f"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-700 to-blue-200 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/ben.png"
              alt="hero image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={350}
              height={350}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
