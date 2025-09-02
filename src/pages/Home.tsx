import AboutSection from "../components/home-components/AboutSection";
import Hero from "../components/home-components/Hero";
import { motion } from "framer-motion";
import ProjectsSection from "../components/home-components/ProjectsSection";
import SkillsSection from "../components/home-components/SkillsSection";
import { projects } from "../data";

const Home = () => {

    return (
      <motion.div
          initial= {{ opacity: 0, y: 20 }}
          animate= {{ opacity: 1, y: 0 }}
          exit= {{ opacity: 0, y: -20 }}
          transition= {{ duration: 0.4 }}
      >
          <Hero />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection projects={ projects } />
      </motion.div>
    )
}

export default Home