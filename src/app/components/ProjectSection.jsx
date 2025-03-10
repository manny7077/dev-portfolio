"use client";
import React, { useState,useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import {motion, useInView} from "framer-motion";



const projectsData = [
  {
    id: 1,
    title: "License Management Website",
    description: "Website that manages licenses used by a company",
    image: "/Images/php_license.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/manny7077/License-database/tree/master",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "GridContacts Website",
    description: "This website is designed to streamline user management and provide a convenient platform for both staff and management users.",
    image: "/Images/django-1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/manny7077/Django-GridContacts",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Infirmary Management System",
    description: "This system allows hospital staff to create medical bills for both registered and new patients, including dependents of staff members. Bills consist of various medical services with corresponding prices. The platform ensures seamless patient management across multiple branches while streamlining billing processes.",
    image: "/Images/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },

];


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref,{once: true})
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants ={
    initial: {y: 50, opacity: 0},
    animate: {y:0, opacity: 1},
  };

  return (
    <section id='projects'>
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