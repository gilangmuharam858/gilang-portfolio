function Contact() {
  const socials = [
    {
      name: 'Instagram',
      username: '@glg_mhrm',
      url: 'https://www.instagram.com/glg_mhrm/',
    },
    {
      name: 'GitHub',
      username: 'gilangmuharam858',
      url: 'https://github.com/gilangmuharam858',
    },
    {
      name: 'LinkedIn',
      username: 'Gilang Muharam',
      url: 'https://www.linkedin.com/in/gilang-muharam-128351321/',
    },
  ]

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="max-w-3xl">
          <p className="text-emerald-400 font-medium mb-3">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mari Terhubung
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Jika ingin berdiskusi, berkolaborasi, atau sekadar terhubung,
            silakan temukan saya melalui beberapa platform berikut.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-800 rounded-xl p-5 hover:border-emerald-500 transition"
              >
                <p className="text-sm text-gray-500 mb-2">
                  {social.name}
                </p>

                <p className="text-white font-medium">
                  {social.username}
                </p>
              </a>
            ))}
          </div>

          <a
            href="mailto:gilangmuharam858@students.unnes.ac.id"
            className="btn btn-outline-light"
          >
            gilangmuharam858@students.unnes.ac.id →
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact