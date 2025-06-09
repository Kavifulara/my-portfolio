export default function PortfolioHero() {
  return (
    <div className="relative bg-primary text-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, We are Dev OP's
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              Interior Designer & Decor Specialist
            </p>
            <p className="mt-4 text-lg text-gray-300">
              Transforming spaces into beautiful, functional environments that reflect your unique style.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="bg-secondary hover:bg-opacity-90 text-white px-6 py-3 rounded-lg font-medium"
              >
                Contact Us
              </a>
              <a
                href="#projects"
                className="border border-white hover:bg-white hover:text-primary px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden">
              <img
                src="/images/portfolio/profile.jpg"
                alt="Kavya - Interior Designer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 