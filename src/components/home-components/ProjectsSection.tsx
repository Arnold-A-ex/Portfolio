import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import ProjectsSectionCard from "./ProjectsSectionCard";
import type { ProjectsType } from "../../data";
import { Link } from "react-router-dom";

interface ProjectsSectionProps {
    projects: ProjectsType[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
    const page: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.15,
                delayChildren: 0.1,
            }
        },
        exit: { opacity: 0, y: 20, transition: { duration: 0.25 } }
    };

    const fadeInRight: Variants = {
        hidden: {opacity: 0, x: -15 },
        show: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeIn" } }
    };
    const recentProjects = projects.slice(0, 3);
    const projectsElement = recentProjects.map( project => (
        <ProjectsSectionCard
            key={project.liveUrl}
            title={project.title}
            description={project.description}
            features={project.features}
            techStack= {project.techStack}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            variants={ fadeInRight }
            whileHover={{ scale: 1.1, transition: { duration: 0.05 } }}
        />
    ));

    return (
        <motion.section
            variants={page}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25}}
            exit="exit"
            className="my-9 p-8"
        >
            
            <h2 className="text-4xl font-bold text-center text-primary mb-12 font-outfit">Recent Projects</h2>
            <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
                { projectsElement }
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.05 } }}className="mt-8 flex justify-center">
                <Link to="projects" className=" bg-[linear-gradient(75deg,var(--accent),var(--accent),var(--card-bg),var(--card-bg))] bg-left bg-[length:400%_100%] text-background py-3 px-6 rounded-full font-semibold hover:-translate-y-2 transition-[background-position] duration-500 ease-out hover:bg-right hover:text-primary shadow-lg my-6">See All</Link>
            </motion.div>
        </motion.section>
    )
}

export default ProjectsSection