import { useState, useEffect } from "react";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { TbDetails } from "react-icons/tb";
import { TbTooltip } from "react-icons/tb";
import { RiHome9Line } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { RxResume } from "react-icons/rx";

export default function Header() {
    const [activeSection, setActiveSection] = useState("home");
    const [isTopSection, setIsTopSection] = useState(true);

    const sections = [
        { name: "Home", id: "home", icon: <RiHome9Line /> },
        { name: "About", id: "about", icon: <TbDetails /> },
        { name: "Resume", id: "resume", icon: <RxResume /> },
        { name: "Projects", id: "projects", icon: <LiaProjectDiagramSolid /> },
        { name: "Skills", id: "skills", icon: <TbTooltip /> },
        { name: "Contact", id: "contact", icon: <RiContactsLine /> }
    ];

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
        }
    };

    useEffect(() => {
        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 3;

            sections.forEach((item) => {
                const elem = document.getElementById(item.id);
                if (elem) {
                    const top = elem.offsetTop;
                    const bottom = top + elem.offsetHeight;
                    if (scrollPos >= top && scrollPos < bottom) {
                        setActiveSection(item.id);
                    }
                }
            });

            const homeElem = document.getElementById("home");
            if (homeElem) {
                setIsTopSection(window.scrollY < homeElem.offsetHeight - 80);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* DESKTOP NAV */}
            <header
                className={`
                fixed top-0 left-0 w-full z-50 
                backdrop-blur-md bg-white/10 border-b border-white/30 shadow-sm
                transition-colors duration-300
                ${isTopSection ? "text-white" : "text-gray-900 bg-white/60"}
                
            `}
            >
                <div className="w-full mx-auto flex items-center justify-between  px-1  lg:px-8 py-4">
                    {/* LOGO */}
                    <a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        <img
                            src="logoP.png"
                            alt="Thilakshana Logo"
                            className="logo-color-change h-9 md:h-14 w-[185px] md:w-[230px] 
        object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                        />
                    </a>

                    {/* NAV BUTTONS */}
                    <nav className="flex space-x-4 text-sm uppercase font-medium ">
                        {sections.map((item) => (
                            <div
                                key={item.id}
                                className={`cursor-pointer py-3 px-4 transition-all rounded-md hidden lg:block
                                    ${activeSection === item.id
                                        ? "bg-white/40 shadow-sm"
                                        : "hover:bg-white/20 hover:shadow-sm"
                                    }
                                `}
                                onClick={() => handleScroll(item.id)}
                            >
                                {item.name}
                            </div>
                        ))}
                    </nav>
                </div>
            </header>

            {/*BOTTOM MOBILE NAV */}
            <div
                className="
    fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full 
     backdrop-blur-md bg-white/10 
                transition-colors duration-300
    
    shadow-sm z-[9999] py-4 flex justify-around items-center
    lg:hidden
  "
            >
                {sections.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => handleScroll(item.id)}
                        className={`
        flex flex-col items-center justify-center cursor-pointer select-none
        relative
        ${activeSection === item.id ? "text-yellow-500" : "text-gray-500 hover:text-yellow-400"}
      `}
                    >
                        {/* Icon */}
                        <span className="text-[18px]">{item.icon}</span>

                        {/* Name with smooth transition */}
                        <span
                            className={`
          text-[10px] mt-1 tracking-wide font-medium
          transition-all duration-300
          ${activeSection === item.id
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 -translate-y-1 h-0 overflow-hidden"
                                }
        `}
                        >
                            {item.name}
                        </span>


                    </div>
                ))}
            </div>






        </>
    );
}
