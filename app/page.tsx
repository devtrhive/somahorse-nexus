'use client' // enables client-side interactivity

import { useEffect } from 'react'

export default function Home() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault()
        const target = document.querySelector(link.getAttribute('href')!)
        target?.scrollIntoView({ behavior: 'smooth' })
      })
    })
  }, [])

  return (
    <main className="bg-gray-900 text-white font-sans overflow-x-hidden">

      {/* Navbar */}
      <nav className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto sticky top-0 bg-gray-900 z-50">
        <div className="text-2xl font-bold tracking-tight text-white">
          Somahorse Nexus
        </div>
        <div className="space-x-6 hidden md:flex">
          <a href="#features" className="hover:text-blue-400 transition">Features</a>
          <a href="#talent" className="hover:text-blue-400 transition">Talent</a>
          <a href="#clients" className="hover:text-blue-400 transition">Clients</a>
        </div>
        <a
          href="#"
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition transform hover:-translate-y-0.5 shadow-md"
        >
          Sign Up
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative text-center px-6 py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-fade-in-down">
          Connect Talent with Opportunity
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in">
          Somahorse Nexus empowers engineers and fintech clients to collaborate seamlessly.
          Post projects, find talent, and get work done faster than ever before.
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-up">
          <a
            href="#features"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition transform hover:-translate-y-1 shadow-lg"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="px-8 py-4 border border-gray-500 rounded-xl hover:border-white transition transform hover:-translate-y-1"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
        {[
          { icon: '👩‍💻', title: 'For Engineers', desc: 'Showcase your skills, build your profile, and get matched with the perfect projects.' },
          { icon: '🏢', title: 'For Clients', desc: 'Post projects, manage applications, and hire top talent with ease.' },
          { icon: '⚡', title: 'Seamless Experience', desc: 'A fast, clean, and intuitive interface designed for both engineers and clients.' }
        ].map((feature, idx) => (
          <div
            key={idx}
            className={`bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 animate-fade-in-up delay-${idx*100}`}
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
            <p className="text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 px-6 text-center rounded-xl mx-6 md:mx-0 max-w-7xl mx-auto my-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Ready to get started with Somahorse Nexus?
        </h2>
        <p className="text-gray-100 mb-6">
          Join our growing community of talented engineers and innovative clients.
        </p>
        <a
          href="#"
          className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition transform hover:-translate-y-0.5 shadow-md"
        >
          Join Now
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-gray-400 text-center">
        <p>&copy; {new Date().getFullYear()} Somahorse Nexus. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-white transition">Twitter</a>
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
        </div>
      </footer>

      {/* Tailwind Animations */}
      <style jsx>{`
        .animate-fade-in { animation: fadeIn 1s ease forwards; opacity: 0; }
        .animate-fade-in-down { animation: fadeInDown 1s ease forwards; opacity: 0; }
        .animate-fade-in-up { animation: fadeInUp 1s ease forwards; opacity: 0; }
        @keyframes fadeIn { to { opacity: 1; } }
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        ${[0,1,2].map(i => `.delay-${i*100} { animation-delay: ${i*0.1}s; }`).join('')}
      `}</style>
    </main>
  )
}
