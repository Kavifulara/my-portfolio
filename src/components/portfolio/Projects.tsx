const projects = [
  {
    title: 'Modern Minimalist Living Room',
    description: 'A clean, contemporary design focusing on functionality and comfort.',
    image: '/images/portfolio/project1.jpg',
    category: 'Living Room',
  },
  {
    title: 'Luxurious Master Bedroom',
    description: 'An elegant bedroom design with custom lighting and premium materials.',
    image: '/images/portfolio/project2.jpg',
    category: 'Bedroom',
  },
  {
    title: 'Rustic Dining Space',
    description: 'A warm and inviting dining area combining traditional and modern elements.',
    image: '/images/portfolio/project3.jpg',
    category: 'Dining Room',
  },
  {
    title: 'Urban Loft Kitchen',
    description: 'A sleek, industrial-style kitchen with state-of-the-art appliances.',
    image: '/images/portfolio/project4.jpg',
    category: 'Kitchen',
  },
  {
    title: 'Zen Garden Patio',
    description: 'A peaceful outdoor space perfect for relaxation and entertainment.',
    image: '/images/portfolio/project5.jpg',
    category: 'Outdoor',
  },
  {
    title: 'Contemporary Home Office',
    description: 'A productive workspace with ergonomic design and natural lighting.',
    image: '/images/portfolio/project6.jpg',
    category: 'Office',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary">Our Projects</h2>
          <div className="mt-2 h-1 w-20 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-sm font-medium text-secondary">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mt-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mt-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 