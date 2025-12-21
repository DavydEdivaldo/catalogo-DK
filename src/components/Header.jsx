import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from '/svg/logo-dk.svg'
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    const navItems = [
        {
            href: "https://www.instagram.com/davyd_0?igsh=c3oxcHFydjd0M2E5",
            icon: <FaInstagram size={20} />,
            label: "Instagram",
        },
        {
            href: "https://wa.me/5581992384292",
            icon: <FaWhatsapp size={20} />,
            label: "WhatsApp",
        },
        {
            href: "",
            icon: <FaLinkedin size={20} />,
            label: "LinkedIn",
        },
        {
            href: "",
            icon: <FaGithub size={20} />,
            label: "GitHub",
        },
    ];

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);




    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-500 ${isOpen
                ? "bg-grid opacity-100"
                : scrolled
                    ? "bg-[#030014]/50 backdrop-blur-xl"
                    : "bg-transparent"
                }`}
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-[10%] w-full flex justify-center">
                <div className="flex items-center justify-between h-16 w-[87vw]">
                    {/* Logo */}
                    <img className="w-[80px] h-[80px]" src={logo} alt="" />
                    <div className="flex-shrink-0">
                        <a
                            href="#Home"
                            onClick={(e) => scrollToSection(e, "#Home")}
                            className="text-xl font-bold text-white"
                        >
                            DK Confecções
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-8 flex items-center space-x-8 gap-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    
                                    className="group relative px-1 py-2 text-sm font-medium"
                                >
                                    <span
                                        className={`relative z-10 transition-colors duration-300 ${activeSection === item.href.substring(1)
                                            ? "text-white font-semibold"
                                            : "text-white group-hover:text-[#cccc]"
                                            }`}
                                    >
                                        {item.icon}
                                    </span>
                                    
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`relative p-2 text-white cursor-pointer hover:text-[#e2d3fd] transition-transform duration-300 ease-in-out transform ${isOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"
                                }`}
                        >
                            {isOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden h-2/5 fixed inset-0 bg-grid transition-all duration-300 ease-in-out ${isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[-100%] pointer-events-none"
                    }`}
                style={{ top: "64px" }}
            >
                <div className="flex flex-col h-full justify-center items-center">
                    <div className="px-4 py-6 space-y-4 flex-1 w-[87vw]">
                        {navItems.map((item, index) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                className={`block px-4 py-3 text-lg font-medium transition-all duration-300 ease ${activeSection === item.href.substring(1)
                                    ? "text-white font-semibold"
                                    : "text-white hover:text-[#e2d3fd]"
                                    }`}
                                style={{
                                    transitionDelay: `${index * 100}ms`,
                                    transform: isOpen ? "translateX(0)" : "translateX(50px)",
                                    opacity: isOpen ? 1 : 0,
                                }}
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>

    );
};

