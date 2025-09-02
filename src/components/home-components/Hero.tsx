import { Link } from "react-router-dom";
import avatar from "../../images/avatar[1].png";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const Hero = () => {
    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            } }
    }

    const child: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut"} },
    }
    return (
      <motion.section
          variants={ container }
          initial= "hidden"
          whileInView = "visible"
          // transition ={{ duration: 0.4 }}
          viewport={{ once: true}}
          className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center py-16 px-4 bg-hero_light dark:bg-hero_dark bg-cover bg-center bg-no-repeat w-4/4 transition-all duration-300 ease-in-out bg-fixed">
          <div  className="w-48 h-48 rounded-full bg-background overflow-hidden mb-8 transition-all duration-300 ease-in-out shadow-lg">
              <img src={ avatar } alt="avatar" className="w-full h-full object-cover" />
          </div>
          <motion.h1 variants={ child } className="text-5xl font-extrabold text-primary font-outfit">Esimnachi Ukaegbu</motion.h1>
          <motion.p variants={ child } className="mt-4 text-2xl font-light text-secondary">Crafting intuitive an engaging web experiences, one interface at a time</motion.p>
          <motion.p variants={ child } className="mt-2 text-lg text-secondary">Frontend Developer</motion.p>
          <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.05 } }}className="mt-8 ">
              <Link to="projects" className=" bg-[linear-gradient(75deg,var(--accent),var(--accent),var(--bg),var(--bg))] bg-left bg-[length:400%_100%] text-background py-3 px-6 rounded-full font-semibold hover:-translate-y-2 transition-[background-position] duration-500 ease-out hover:bg-right hover:text-primary shadow-lg">Explore My Work</Link>
          </motion.div>
      </motion.section>
    )
}

export default Hero