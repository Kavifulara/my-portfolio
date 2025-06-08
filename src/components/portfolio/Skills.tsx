const skills = [
  {
    category: 'Design',
    items: [
      { name: 'Interior Design', level: 95 },
      { name: 'Color Theory', level: 90 },
      { name: 'Space Planning', level: 85 },
      { name: 'Furniture Selection', level: 90 },
    ],
  },
  {
    category: 'Technical',
    items: [
      { name: 'AutoCAD', level: 85 },
      { name: 'SketchUp', level: 80 },
      { name: '3D Visualization', level: 75 },
      { name: 'Adobe Creative Suite', level: 70 },
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Project Management', level: 90 },
      { name: 'Client Communication', level: 95 },
      { name: 'Budget Planning', level: 85 },
      { name: 'Vendor Management', level: 80 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary">My Skills</h2>
          <div className="mt-2 h-1 w-20 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-6">{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-secondary rounded-full h-2"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 