import React, { useState, useEffect } from 'react';
import heroImage from './assets/hero.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import SocialBadges from './SocialBadges';

const phrases = [
    'Where passion meets the plate.',
    'Crafting stories through flavor.',
    'Bold. Creative. Delicious.',
    'Welcome to Chef Theo’s world.',
];

function Home() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const scrollToWork = () => {
        const workSection = document.getElementById('work');
        if (workSection) {
            workSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* Overlay pentru lizibilitate */}
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            {/* Conținut */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                    Bites by Theo
                </h1>

                <AnimatePresence mode="wait">
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 1 }}
                        className="text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-xl mx-auto font-light text-white drop-shadow"
                    >
                        {phrases[index]}
                    </motion.p>
                </AnimatePresence>

            </div>

            {/* Scroll down */}
            <div
                onClick={scrollToWork}
                className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer select-none z-20"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') scrollToWork();
                }}
                aria-label="Scroll down to work section"
            >
                <span className="animate-bounce text-white text-2xl sm:text-3xl">⌄</span>
                <small className="text-white uppercase tracking-widest text-xs sm:text-sm">Scroll down</small>
            </div>

            {/* Social Badges (rămân în colț dreapta jos și pe mobil) */}
            <SocialBadges />
        </section>
    );
}

export default Home;
