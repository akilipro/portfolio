"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "VIH Datapro",
    description: "Database of all multi-sectoral programmatic HIV indicators",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://vihdatapro.org/",
    previewUrl: "https://vihdatapro.org/",
  },
  {
    id: 2,
    title: "DRC 1325 Database",
    description: "Database on women, peace and security in the Democratic Republic of Congo",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://sn1325.org/",
    previewUrl: "https://sn1325.org/",
  },
  {
    id: 3,
    title: "JADO Android App",
    description: "JADO provides health services to Young People and Teenagers living mainly in the DRC through an Android application that is easily accessible and usable for all.",
    image: "/images/projects/3.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "https://play.google.com/store/apps/details?id=com.akili.jado",
    previewUrl: "https://play.google.com/store/apps/details?id=com.akili.jado",
  },
  {
    id: 4,
    title: "Website 1325",
    description: "Website on information on peace and security of women in the DRC according to United Nations Resolution 1325",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://info1325.org/",
    previewUrl: "https://info1325.org/",
  },
  {
    id: 5,
    title: "Website PNMLS",
    description: "Information on developments and news in the HIV response in the DRC",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.pnmls.cd/",
    previewUrl: "https://www.pnmls.cd/",
  },
  {
    id: 6,
    title: "JADO WebApp",
    description: "JADO provides health services to Young People and Teenagers living mainly in the DRC through a Web application that is easily accessible and usable for all.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://jadordc.org/",
    previewUrl: "https://jadordc.org/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
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

export default ProjectsSection;
