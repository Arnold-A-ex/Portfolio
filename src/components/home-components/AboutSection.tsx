import { motion } from "framer-motion";
import avatar from "../../images/avatar[1].png";
import type { Variants } from "framer-motion";
import { Code, Folder, Github } from 'lucide-react';
import Skill from "../Skill";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AboutSection = () => {
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
        // viewport: { once: true, amount: 0.2},
        exit: { opacity: 0, y: 20, transition: { duration: 0.25 } }
    };
    // const item: Variants = {
    //     hidden: {opacity: 0, y: 15 },
    //     show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeIn" } }
    // };
    const fadeInRight: Variants = {
        hidden: {opacity: 0, x: -15 },
        show: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeIn" } }
    };
    const skills = [
        {
            title: "TechStack",
            skill: ["React (Js & Ts), TailwindCSS, Bootstrap"],
            variants: fadeInRight,
            Icon: Code
        },
        {
            title: "Education",
            skill: ["B.Sc in Computer Science",],
            variants: fadeInRight,
            Icon: Folder
        },
        {
            title: "Project",
            skill: ["Building interactive web apps and UI components"],
            variants: fadeInRight,
            Icon: Github
        },
        // {
        //     title: "interests",
        //     skill: ["Movies, football and exploring tech trends"],
        //     variants: fadeInRight,
        //     Icon: Star
        // }
    ];
    const skillsElement = skills.map(skill => {
        return <Skill key={skill.title} title={skill.title} skills={skill.skill} variants={skill.variants} Icon={skill.Icon} />
    })

    useEffect(() => {
            scrollTo(0, 0);
        }, [])

  return (
        <motion.section
            variants ={ page }
            initial="hidden"
            whileInView="show"
            viewport= { { once: true, amount: 0.5} }
            exit="exit"
            className="grid grid-cols-1 xl:grid-cols-[550px_1fr]  bg-background text-secondary p-8 pr-10 my-8"
        >
            <motion.div className="flex items-center justify-center mb-4">
                <img src={ avatar } alt="developer-avatar" className="mx-auto" />
            </motion.div>
            <motion.div variants={ page }>
                <h2 className="text-4xl font-bold text-center text-primary mb-12 font-outfit">About Me</h2>
                <motion.p className="text-lg font-semibold mb-2">Hi, I'm <motion.span className="text-primary">Esimnachi Ukaegbu</motion.span>, a Frontend Developer.</motion.p>
                <motion.p className="mb-4">I build responsive and user-friendly web applications. Always learning new technologies to improve my craft.</motion.p>
                <motion.ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-3 gap-6">
                    { skillsElement }
                </motion.ul>
                <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.05 } }}className="mt-8 flex justify-center">
                    <Link to="about" className=" bg-[linear-gradient(75deg,var(--accent),var(--accent),var(--card-bg),var(--card-bg))] bg-left bg-[length:400%_100%] text-background py-3 px-6 rounded-full font-semibold hover:-translate-y-2 transition-[background-position] duration-500 ease-out hover:bg-right hover:text-primary shadow-lg my-6">Read More</Link>
                </motion.div>
            </motion.div>
        </motion.section>
  )
}

export default AboutSection