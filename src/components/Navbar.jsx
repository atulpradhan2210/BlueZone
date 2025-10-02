import React, { useState, useEffect } from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check login state on mount
        const token = localStorage.getItem("accessToken");
        setIsLoggedIn(!!token);

        // Sync login/logout across tabs or components
        const handleStorageChange = () => {
            const token = localStorage.getItem("accessToken");
            setIsLoggedIn(!!token);
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        navigate("/login");
    };

    return (
        <div>
            <nav className="bg-gradient-to-r from-blue-900 to-blue-700 shadow-md">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <a href="/" className="flex items-center space-x-2">
                        <UserIcon className="w-8 h-8 text-cyan-300" />
                        <span className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-300">
                            BlueZone
                        </span>
                    </a>

                    {/* Links */}
                    <ul className="hidden md:flex justify-center items-center space-x-8">
                        <li>
                            <a
                                href="/features"
                                className="text-white hover:text-cyan-300 transition-colors"
                            >
                                Features
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="text-white hover:text-cyan-300 transition-colors"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="text-white hover:text-cyan-300 transition-colors"
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            {isLoggedIn ? (
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-700 transition-colors cursor-pointer"
                                >
                                    Logout
                                </button>
                            ) : (
                                <a
                                    href="/login"
                                    className="bg-cyan-400 text-blue-900 font-semibold px-4 py-2 rounded-md hover:bg-cyan-300 transition-colors cursor-pointer"
                                >
                                    Login
                                </a>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
