import { useState, useEffect } from 'react'
import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'  // import iconițe
import Navbar from './Navbar'
import Home from './Home'
import Work from './Work'
import GalleryMenu from './GalleryMenu'
import Contact from './Contact'


function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-800 text-black dark:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Toggle Dark Mode */}
      <div className="fixed top-16 right-4 z-50">
        <button
          id="darkModeToggle"
          aria-label="Toggle Dark Mode"
          className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white shadow hover:scale-110 transition-transform"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaMoon size={24} /> : <FaSun size={24} />}
        </button>
      </div>

      {/* Afișăm Home în afara containerului limitat */}
      <Home />

      {/* Celelalte secțiuni cu layout restrâns */}
      <main className="pt-20 max-w-7xl mx-auto px-4 space-y-32">
        <section id="work"><Work /></section>
        <section id="gallery-menu"><GalleryMenu /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  )
}


export default App
