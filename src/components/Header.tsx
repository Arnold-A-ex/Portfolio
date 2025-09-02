// import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import cn from "classnames";
// import initials from "../images/initials0bg.svg";

interface HeaderProps {
    changeTheme: () => void;
    theme: string;
}
const Header = ({ changeTheme, theme }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isDark = theme === "dark";

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="py-4 px-8 w-full flex justify-between items-center bg-background text-primary shadow-md fixed top-0 z-50 transition-all duration-300 ease-in-out font-outfit font-bold">
            <NavLink to="/" className="text-xl rounded font-bold text-accent border-2 p-1 border-accent font-logo" onClick={ closeMenu } >
                UE
            </NavLink>
            <nav className="hidden md:flex gap-4 items-center font-outfit">
                <NavLink to="/" className={ ({ isActive }) => `hover:text-accent transition-colors font-outfit ${isActive ? "border-b-2 border-b-accent text-accent" : ""}`}>Home</NavLink>
                <NavLink to="about" className={ ({ isActive }) => `hover:text-accent transition-colors font-outfit ${isActive ? "border-b-2 border-b-accent text-accent" : ""}`}>About</NavLink>
                <NavLink to="projects" className={ ({ isActive }) => `hover:text-accent transition-colors font-outfit ${isActive ? "border-b-2 border-b-accent text-accent" : ""}`}>Projects</NavLink>
                <NavLink to="contact" className={ ({ isActive }) => `hover:text-accent transition-colors font-outfit ${isActive ? "border-b-2 border-b-accent text-accent" : ""}`}>Contact</NavLink>
            </nav>
            <button className="hidden md:flex rounded-full bg-card_bg transition-colors items-center w-14 h-8 relative " onClick={ changeTheme }>
                <Sun size="20" className={cn("absolute left-2 w-4 h-4 transition-opacity text-primary", {"opacity-100": isDark, "opacity-0": !isDark})} />
                <Moon size="20" className={ cn("absolute right-2 w-4 h-4 transition-opacity text-primary", {"opacity-100": !isDark, "opacity-0": isDark })} />
                <span className={ cn("absolute w-6 h-6 bg-primary rounded-full shadow-md transform transition-transform", {"translate-x-8": isDark, "translate-x-0": !isDark})} />
            </button>
            <div className="md:hidden flex items-center g-4 z-50">
                <button className="flex rounded-full bg-card_bg transition-colors items-center w-14 h-8 relative " onClick={ changeTheme }>
                    <Sun size="20" className={cn("absolute left-2 w-4 h-4 transition-opacity text-primary", {"opacity-100": isDark, "opacity-0": !isDark})} />
                    <Moon size="20" className={ cn("absolute right-2 w-4 h-4 transition-opacity text-primary", {"opacity-100": !isDark, "opacity-0": isDark })} />
                    <span className={ cn("absolute w-6 h-6 bg-primary rounded-full shadow-md transform transition-transform", {"translate-x-8": isDark, "translate-x-0": !isDark})} />
                </button>
                <button onClick={ toggleMenu } className=" text-primary p-2 rounded-full hover:bg-card_bg dark:hover:bg-card_bg transition-colors">
                    { isMenuOpen ? <X size={24} /> : <Menu size={24} className="text-primary"/> }
                </button>
            </div>
            { isMenuOpen && (
                <div className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-6 md:hidden">
                    <NavLink to="/" className={ ({ isActive }) => `text-3xl font-bold hover:text-accent transition-colors font-outfit ${isActive ? "border-b-2 border-b-accent text-accent" : ""}`} onClick={closeMenu}>Home</NavLink>
                    <NavLink to="about" className={ ({ isActive }) => `text-3xl font-bold hover:text-accent transition-colors font-outfit ${isActive ? "border-b-2 border-b-accent text-accent" : ""}`} onClick={closeMenu}>About</NavLink>
                    <NavLink to="projects" className={ ({ isActive }) => `text-3xl font-bold hover:text-accent transition-colors font-outfit ${isActive ? "border-b-2 border-b-accent text-accent" : ""}`} onClick={closeMenu}>Projects</NavLink>
                    <NavLink to="contact" className={ ({ isActive }) => `text-3xl font-bold hover:text-accent transition-colors font-outfit ${isActive ? "border-b-2 border-b-accent text-accent" : ""}`} onClick={closeMenu}>Contact</NavLink>
                </div>
            )}
        </header>
    )
}

export default Header