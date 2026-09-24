import profileImage from '../assets/profile-gilang.png'

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-950 text-white flex items-center pt-24"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Bagian kiri: teks */}
          <div className="animate-fade-up">
            <p className="text-emerald-400 font-medium mb-4">
              Mahasiswa Sistem Informasi
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Gilang Muharam
            </h1>

            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed mb-8 animate-fade-up-delay">
              Tertarik pada proses bisnis, sistem informasi, dan pemanfaatan
              teknologi untuk menyelesaikan masalah.
            </p>

            <p className="text-gray-500 mb-8">
              Universitas Negeri Semarang · Semester 5
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up-delay-2">
              <a
                href="#projects"
                className="px-6 py-3 bg-emerald-500 text-gray-950 font-semibold rounded-lg hover:bg-emerald-400 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                Lihat Project
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-gray-700 text-white rounded-lg hover:border-emerald-400 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300"
              >
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* Bagian kanan: foto */}
          <div className="flex justify-center md:justify-end mt-8 md:mt-0 animate-fade-in">
            <div className="relative animate-float">

              <div className="absolute -inset-3 border border-emerald-500/20 rounded-2xl rotate-3" />

            <img
            
            src={profileImage}
            alt="Gilang Muharam"
            className="relative w-48 h-60 sm:w-56 sm:h-72 md:w-80 md:h-[28rem] object-cover rounded-2xl border border-gray-800 shadow-2xl"
            />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero