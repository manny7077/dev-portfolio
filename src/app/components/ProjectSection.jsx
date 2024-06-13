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
    image: "/Images/Image4.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/manny7077/License-database/tree/master",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "GridContacts Website",
    description: "This website is designed to streamline user management and provide a convenient platform for both staff and management users.",
    image: "/Images/Image1.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/manny7077/Django-GridContacts",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Restaurant Landing Page",
    description: "In Progress....",
    image: "/Images/Image5.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Restaurant Landing Page",
    description: "In Progress....",
    image: "/Images/Image10.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Restaurant Landing Page",
    description: "In Progress....",
    image: "/Images/Image11.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Restaurant Landing Page",
    description: "In Progress....",
    image: "/Images/Image9.jpeg",
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
      Gallery
      </h2>
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