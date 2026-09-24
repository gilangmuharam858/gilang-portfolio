function Projects() {
  const projects = [
    {
      title: 'Analisis Ketersediaan Stopkontak Gedung FMIPA D.1',
      description:
        'Menganalisis permasalahan ketersediaan stopkontak di Gedung FMIPA D.1 yang digunakan mahasiswa untuk menunjang aktivitas perkuliahan dan penggunaan perangkat elektronik.',
      details:
        'Project mencakup pengumpulan data melalui kuesioner dan wawancara, identifikasi permasalahan, analisis kondisi yang terjadi, serta perancangan alternatif solusi.',
      tools: [
        'Google Forms',
        'Kuesioner',
        'Wawancara',
        'Analisis Proses Bisnis',
        'Business Mapping',
        'AS-IS & TO-BE',
      ],
    },
    {
      title: 'Business Process Analysis',
      description:
        'Project analisis proses bisnis yang berfokus pada pemetaan proses, identifikasi permasalahan, serta perancangan perbaikan proses.',
      details:
        'Menggunakan pendekatan analisis proses bisnis untuk memahami kondisi proses saat ini dan menyusun alternatif proses yang lebih terstruktur.',
      tools: [
        'Business Process Mapping',
        'AS-IS',
        'TO-BE',
        'Flowchart',
        'Problem Analysis',
      ],
    },
    {
      title: 'Personal Portfolio',
      description:
        'Membangun personal portfolio sebagai media untuk menampilkan profil, pengalaman, project, dan kemampuan yang dimiliki.',
      details:
        'Project ini juga menjadi bagian dari proses pembelajaran React, Tailwind CSS, Bootstrap, dan pengembangan web.',
      tools: [
        'React',
        'Tailwind CSS',
        'Bootstrap',
        'JavaScript',
        'Git & GitHub',
      ],
    },
  ]

  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <p className="text-emerald-400 font-medium mb-3">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Project yang Pernah Dikerjakan
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-500 font-mono">
                  0{index + 1}
                </span>

                <span className="text-emerald-400">
                  ↗
                </span>
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-4">
                {project.description}
              </p>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {project.details}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects