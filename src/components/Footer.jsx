function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-500">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm">
          © {new Date().getFullYear()} Gilang Muharam.
          All rights reserved.
        </p>

        <a
          href="#home"
          className="text-sm hover:text-white transition"
        >
          Kembali ke atas ↑
        </a>

      </div>
    </footer>
  )
}

export default Footer