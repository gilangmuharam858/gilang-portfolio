import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleMenuClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold text-white"
          onClick={handleMenuClick}
        >
          Gilang.
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-emerald-400 hover:-translate-y-0.5 transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Tombol Hamburger Mobile */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white text-2xl"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-950">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleMenuClick}
                className="text-gray-300 hover:text-emerald-400 transition py-2"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar