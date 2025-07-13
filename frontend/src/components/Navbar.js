import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
    const handleSearchChange = (e) => setSearchQuery(e.target.value);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/news", label: "News" },
        { to: "/team", label: "Team" },
        { to: "/research", label: "Research" },
        { to: "/publications", label: "Publications" },
        { to: "/opportunities", label: "Opportunities" },
        { to: "/contact", label: "Contact" }
    ];

    return (
        <header className="fixed w-full top-0 z-50 bg-white shadow-md">
            <nav className="container mx-auto flex items-center justify-between px-4 py-4 ">
                {/* Logo */}
                <Link to="/">
                    <div className="flex items-center">
                        <img 
                            src={Logo} 
                            alt="GAASH Logo" 
                            className="h-12 w-auto transition-transform hover:scale-105" 
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6 items-center text-gray-800">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link 
                                to={link.to} 
                                className="font-medium hover:text-blue-600 transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-700 hover:text-blue-600"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-7 h-7" />
                        ) : (
                            <Menu className="w-7 h-7" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Slide-out */}
            <div
                className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform ${
                    isMenuOpen ? "-translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out z-50`}
            >
                <button
                    className="absolute top-6 right-6 text-gray-700"
                    onClick={closeMenu}
                    aria-label="Close menu"
                >
                    <X className="w-7 h-7" />
                </button>

                <ul className="mt-20 space-y-6 px-8 text-gray-800">
                    {navLinks.map((link, index) => (
                        <li 
                            key={link.to} 
                            className={`transform translate-x-full ${
                                isMenuOpen ? "animate-slide-in" : ""
                            }`}
                            style={{ 
                                animationDelay: `${index * 75}ms`,
                                animationFillMode: 'forwards'
                            }}
                        >
                            <Link 
                                to={link.to} 
                                className="block py-2 hover:text-blue-600 transition-colors"
                                onClick={closeMenu}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};


export default Navbar;