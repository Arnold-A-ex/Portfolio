import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import cn from "classnames";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

interface LayoutProps {
    theme: string;
    changeTheme: () => void;
}


const Layout: React.FC<LayoutProps> = ({ theme, changeTheme }) => {
    const { pathname } = useLocation();
    const [showButton, setShowButton] = useState<boolean>(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth"})
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100) setShowButton(true);
            else setShowButton(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    useEffect(() => {
        scrollToTop();
    }, [pathname])


    return (
        <div className={ cn("min-h-screen text-primary bg-background transition-all duration-300 ease-in-out overflow-x-hidden", { "dark": theme === "dark", "dark-layout": theme === "dark", "light-layout": theme === "light" }) }>
            <div className="">
                <Header changeTheme={ changeTheme } theme={ theme }/>
                <main className="mx-auto font-nunito my-14">
                    <Outlet />
                </main>
                <Footer />
            </div>

            { showButton &&
                <button className="rounded-full bg-card_bg text-accent p-3 font-bold hover:scale-110 border-2 border-card_bg shadow-lg hover:border-accent fixed bottom-16 right-4 z-50" onClick={ scrollToTop }>
                    <ArrowUp size={24} />
                </button>
            }
        </div>
    )
}

export default Layout