import { Code, Users, Palette, Cog } from 'lucide-react';
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Skill from '../components/Skill';

const About = () => {
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
    const item: Variants = {
        hidden: {opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeIn" } }
    };
    const fadeInRight: Variants = {
        hidden: {opacity: 0, x: -15 },
        show: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeIn" } }
    };
    const skills = [
        {
            title: "Core Frontend",
            skill: ["React (JavaScript & TypeScript)", "TailwindCSS", "Bootstrap"],
            variants: item,
            Icon: Code
        },
        {
            title: "UI & Styling",
            skill: ["Component-driven Design", "Responsive and accessible layouts"],
            variants: item,
            Icon: Palette
        },
        {
            title: "Workflow & Tools",
            skill: ["Git & GitHub", "npm & package management", "Vs Code"],
            variants: item,
            Icon: Cog
        },
        {
            title: "Soft Skills",
            skill: ["Problem Solving", "Adaptability", "Collaboration", "Continuous Learning"],
            variants: item,
            Icon: Users
        }
    ];

    const skillsElement = skills.map(skill => {
        return <Skill key={skill.title} title={skill.title} skills={skill.skill} variants={skill.variants} Icon={skill.Icon} />
    });


    return (
        <motion.section
            variants={ page }
            initial= "hidden"
            animate= "show"
            exit= "exit"
            className="py-16 px-4 about">
            <motion.div variants={page} className="container mx-auto">
                <h2 className="text-4xl font-bold text-center text-primary mb-12 font-outfit">About Me</h2>
                <div className="lg:flex lg:gap-12 items-start max-w-5xl mx-auto">
                    <div className="flex-1 mb-8 md:mb-0 ">
                        <motion.p variants={ fadeInRight } className="text-lg text-secondary leading-relaxed mb-4">
                            Hi, I'm Ukaegbu Esimnachi, a Frontend Developer and recent Graduate in Computer Science. I create modern, responsive and user-friendly web applications that are efficient and polished. I enjoy translating design ideas into digital experiences that people love to interact with.
                        </motion.p>
                        <motion.p variants={ fadeInRight } className="text-lg text-secondary leading-relaxed mb-4">
                            I graduated with first-class honors, achieving the highest score in my department, which reflects my dedication to learning and solving problems creatively. I'm always exploring new technologies, experimenting with innovative solutions and growing as a developer.
                        </motion.p>
                        <motion.p variants={ fadeInRight } className="text-lg text-secondary leading-relaxed">
                            Outside coding, I'm a movie enthusiast and a football fanatic. Whether I'm watching the latest blockbuster or following the Premier League, I enjoy finding inspiration and excitement in stories and teamwork-both on and off the screen.
                        </motion.p>
                        <motion.p variants={ fadeInRight } className="text-lg text-secondary leading-relaxed">
                            My goal is to keep improving as a developer while contributing to projects that make an impact and delight users.
                        </motion.p>
                    </div>

                  {/* Skills and Interests Section */}
                  <motion.div variants={ page } className="flex-1 md:mt-3">
                        <h3 className="text-3xl font-semibold mb-4">Skills & Tools</h3>
                        <motion.div variants={ page } className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                            { skillsElement }
                        </motion.div>
                  </motion.div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default About;

