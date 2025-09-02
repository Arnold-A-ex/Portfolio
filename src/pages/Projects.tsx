import ProjectCard from '../components/ProjectCard';
import type { ProjectsType } from "../data";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface ProjectProps {
    projects: ProjectsType[];
}

const Projects: React.FC<ProjectProps> = ( {projects} ) => {
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

    const projectsElement = projects.map((project, index) => (
        <ProjectCard
            key={index}
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
            variants = { page }
            initial= "hidden"
            animate="show"
            exit="exit"
            className="py-16 p-8">
            <motion.div variants={ page } className="container mx-auto">
                <h2 className="text-4xl font-bold text-center text-primary mb-12 font-outfit">My Projects</h2>
                <motion.div variants={page} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    { projectsElement }
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Projects;