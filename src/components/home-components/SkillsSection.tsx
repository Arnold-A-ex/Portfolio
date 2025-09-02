import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiBootstrap, SiTailwindcss } from 'react-icons/si';

import { Link } from "react-router-dom";
import { useEffect } from "react";

const SkillsSection = () => {
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

    const skills = [SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiBootstrap, SiTailwindcss];
    const skillsElement = skills.map((Skill, index)=> (
        <motion.div
            variants={ fadeInRight }
            whileHover={{ scale: 1.05, transition: {duration: 0.05 } }} 
            key={ index }
            className="text-accent bg-card_bg rounded-lg p-10 flex justify-center shadow-md hover:shadow-xl cursor-not-allowed"
        >
            <Skill size={ 60 }/>
        </motion.div>
    ))

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
            className=" bg-background text-secondary p-8 pr-10 my-8"
        >
            <h2 className="text-4xl font-bold text-center text-primary mb-12 font-outfit">My Skills</h2>
            <motion.div variants={page} className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                { skillsElement }
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.05 } }} className="mt-8 flex justify-center">
                <Link to="contact" className=" bg-[linear-gradient(75deg,var(--accent),var(--accent),var(--card-bg),var(--card-bg))] bg-left bg-[length:400%_100%] text-background py-3 px-6 rounded-full font-semibold hover:-translate-y-2 transition-[background-position] duration-500 ease-out hover:bg-right hover:text-primary shadow-lg my-6">Contact Me</Link>
            </motion.div>
        </motion.section>
  )
}

export default SkillsSection