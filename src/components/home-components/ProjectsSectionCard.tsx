import React from 'react';
import { Github, Globe } from 'lucide-react';
import type { ProjectsType } from "../../data";
// import type { Variants, TargetAndTransition } from "framer-motion";
import { motion } from "framer-motion";

// interface ProjectCardProps extends ProjectsType{

// }

const ProjectsSectionCard: React.FC<ProjectsType> = ({
    title,
    description,
    // features,
    // techStack,
    imageUrl,
    githubUrl,
    liveUrl,
    variants,
    whileHover
}) => {
    // const featuresElement = features.map((feature, index) => {
    //     return ( <li className="" key={ index } >{ feature }</li>)
    // })
    // const techStackElement = techStack.map((stack, index) => {
    //     return( <li key={index}>{ stack }</li>)
    // });

    return (
        <motion.div variants={ variants } whileHover={ whileHover } className="bg-card_bg group p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 cursor-not-allowed ">
            <img src={imageUrl} alt={`Image of ${title}`} className="rounded-md mb-4 w-full h-48 object-cover" />
            <h3 className="text-2xl font-bold mb-2 text-primary">{title}</h3>
            <p className="text-secondary mb-4">{description}</p>
            {/* <ul className="list-disc list-outside pl-4 text-secondary">
                { featuresElement }
            </ul>
            <ul className="list-disc flex-wrap flex gap-x-6 gap-y-0 items-center justify-start my-4 list-inside text-secondary">{ techStackElement } </ul> */}
            <div className="flex gap-4">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex group items-center gap-2 hover:text-primary text-accent transition-colors font-semibold cursor-pointer">
                    <Globe size={20} className="group-hover:[transform:rotateX(360deg)] transition-transform duration-400 "/>
                    Live Demo
                </a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex group items-center gap-2 hover:text-primary text-accent transition-colors font-semibold cursor-pointer">
                    <Github size={20} className=" transition-transform duration-400 group-hover:[transform:rotateX(360deg)]" />
                    Source Code
                </a>
            </div>
        </motion.div>
    );
};

export default ProjectsSectionCard;