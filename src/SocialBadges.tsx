import React, { useState } from 'react'
import { FaLinkedin, FaInstagram, FaFacebook, FaTimes } from 'react-icons/fa'
import cvThumbnail from './assets/cv-thumbnail.png'  // înlocuiește cu miniatura ta
import cvFile from './assets/cv-theo.pdf'           // CV-ul tău

function SocialBadges() {
  const [showCV, setShowCV] = useState(false)

  return (
    <>
      {/* Bara de social + CV */}
      <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-4 z-50">
        <a
          href="https://linkedin.com/in/theo" target="_blank" rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-500 transition transform hover:scale-110"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://instagram.com/theo" target="_blank" rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-400 transition transform hover:scale-110"
          aria-label="Instagram"
        >
          <FaInstagram size={28} />
        </a>
        <a
          href="https://facebook.com/theo" target="_blank" rel="noopener noreferrer"
          className="text-blue-800 hover:text-blue-600 transition transform hover:scale-110"
          aria-label="Facebook"
        >
          <FaFacebook size={28} />
        </a>

        <button
          onClick={() => setShowCV(true)}
          className="mt-4 bg-red-900 hover:bg-red-700 text-white px-2 py-2 rounded shadow transition transform hover:scale-105"
          aria-label="See my CV"
        >
          CV
        </button>
      </div>

      {/* Popup CV */}
      {showCV && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">

          <div className="relative bg-white rounded-lg shadow-lg max-w-lg w-full">
            <button
              onClick={() => setShowCV(false)}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              aria-label="Close CV preview"
            >
              <FaTimes size={24} />
            </button>

            <a href={cvFile} target="_blank" rel="noopener noreferrer" download className="block p-4">
              <img
                src={cvThumbnail}
                alt="Preview of CV"
                className="mx-auto rounded-md shadow-md max-h-[500px] object-contain"
              />
              <p className="text-center mt-2 text-blue-600 underline cursor-pointer">Download CV</p>
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default SocialBadges
