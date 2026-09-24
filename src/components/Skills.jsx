function Skills() {
  const skillGroups = [
    {
      title: 'Business & Analysis',
      skills: [
        'Analisis Proses Bisnis',
        'Business Process Mapping',
        'System Analysis',
        'Requirement Analysis',
        'Problem Solving',
      ],
    },
    {
      title: 'Design',
      skills: [
        'UI/UX',
        'Figma',
        'Flowchart',
        'Process Diagram',
      ],
    },
    {
      title: 'Technical',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Tailwind CSS',
        'Bootstrap',
        'Git & GitHub',
        'MySQL',
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="bg-gray-950 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <p className="text-emerald-400 font-medium mb-3">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Kemampuan
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-6">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 text-sm rounded-lg bg-gray-800 text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills