function Experience() {
  const experiences = [
    {
      period: '2024 — Sekarang',
      role: 'Staf Operasional Masjid',
      organization: 'Masjid Al-Ikhlas POMDAM IV/Diponegoro',
      description:
        'Membantu pelaksanaan operasional harian masjid, menjaga kesiapan dan kenyamanan fasilitas, serta mendukung berbagai kegiatan yang diselenggarakan di lingkungan masjid.',
    },
    {
      period: '2026',
      role: 'Ketua',
      organization: 'Palatikom',
      description:
        'Memimpin dan mengkoordinasikan anggota, mengatur pembagian tugas, serta memastikan program kerja dan kegiatan organisasi dapat berjalan sesuai dengan tujuan.',
    },
    {
      period: '2026',
      role: 'Kepala Divisi Seni & Budaya',
      organization: 'Himpunan Mahasiswa Bekasi',
      description:
        'Mengkoordinasikan anggota dan program kerja Divisi Seni & Budaya serta terlibat dalam perencanaan dan pelaksanaan berbagai kegiatan organisasi.',
    },
  ]

  return (
    <section
      id="experience"
      className="bg-gray-950 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <p className="text-emerald-400 font-medium mb-3">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Pengalaman
          </h2>
        </div>

        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[180px_1fr] gap-6 border-t border-gray-800 pt-8"
            >
              <p className="text-gray-500 font-mono text-sm">
                {experience.period}
              </p>

              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  {experience.role}
                </h3>

                <p className="text-emerald-400 mb-4">
                  {experience.organization}
                </p>

                <p className="text-gray-400 leading-relaxed max-w-2xl">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience