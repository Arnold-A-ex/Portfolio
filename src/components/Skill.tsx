import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { Variants } from "framer-motion";

interface SkillProps {
    variants: Variants;
    Icon: LucideIcon;
    skills: string[];
    title: string;
}
const Skill: React.FC<SkillProps > = ({ variants, Icon, skills, title}) => {
    const listElement = skills.map((skill, index) => {
        return <li key={ index }>{ skill }</li>
    })
    return (
        <motion.div variants={ variants } whileHover={{ scale: 1.1, transition: { duration: 0.05 } }} className="bg-card_bg  group p-6 rounded-lg shadow-md hover:shadow-lg  cursor-not-allowed transition-all duration-300 ease-in-out hover:scale-110">
            <Icon className=" mb-2 icon text-accent transition-transform duration-400 group-hover:[transform:rotateY(360deg)]" size={32} />
            <h4 className="font-bold text-xl mb-2">{title}</h4>
            <ul className="text-secondary list-disc list-outside pl-3">
                { listElement }
            </ul>
        </motion.div>
    )
}

export default Skill