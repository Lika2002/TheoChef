import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logoLight from './assets/logo-light.png';
import logoDark from './assets/logo-dark.png';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);



    // Funcția care gestionează mouse leave cu excepția când cursorul trece pe butonul dark mode
    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (
            e.relatedTarget &&
            typeof (e.relatedTarget as Element).closest === 'function' &&
            (e.relatedTarget as Element).closest('#darkModeToggle')
        ) {
            return;
        }
        setMenuOpen(false);
    };




    return (
        <>
            {/* Navbar principal */}
            <nav className="fixed top-0 left-0 w-full bg-gray-100 dark:bg-neutral-800 shadow-md z-50 py-4">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <img
                        src={logoLight}
                        alt="Bites by Theo"
                        className="h-14 transition-transform duration-300 ease-in-out hover:scale-110 block dark:hidden"
                    />
                    <img
                        src={logoDark}
                        alt="Bites by Theo"
                        className="h-14 transition-transform duration-300 ease-in-out hover:scale-110 hidden dark:block"
                    />

                    {/* Meniu Desktop */}
                    <div className="hidden md:flex space-x-6 text-black dark:text-white font-medium">
                        {['home', 'work', 'gallery-menu', 'contact'].map((id, i) => (
                            <a
                                key={i}
                                href={`#${id}`}
                                className="group relative hover:text-red-500 transition-colors duration-300"
                            >
                                {id.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Buton hamburger pentru mobil */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="md:hidden text-black dark:text-white"
                        aria-label="Open menu"
                    >
                        <FiMenu size={28} />
                    </button>
                </div>
            </nav>

            {/* Meniu lateral pe mobil */}
            <div
                className={`fixed top-0 right-0 h-full w-2/5 max-w-[160px] bg-gray-100 dark:bg-neutral-800 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                onMouseLeave={handleMouseLeave}
                onTouchEnd={() => setMenuOpen(false)}
                onTouchCancel={() => setMenuOpen(false)}
                onClick={(e) => e.stopPropagation()}
            >




                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="text-black dark:text-white"
                        aria-label="Close menu"
                    >
                        <FiX size={28} />
                    </button>
                </div>
                <div className="flex flex-col items-center space-y-6 mt-10 text-black dark:text-white font-medium">
                    {['home', 'work', 'gallery-menu', 'contact'].map((id, i) => (
                        <a
                            key={i}
                            href={`#${id}`}
                            onClick={() => setMenuOpen(false)}
                            className="group relative hover:text-red-500 transition-colors duration-300"
                        >
                            {id.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                        </a>
                    ))}
                </div>
            </div >

            {/* Overlay când meniul e deschis (pe mobil) */}
            {
                menuOpen && (
                    <div
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    />
                )
            }
        </>
    );
}

export default Navbar;
