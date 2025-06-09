export default function AboutMe() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary">About Us</h2>
          <div className="mt-2 h-1 w-20 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/portfolio/about.jpg"
              alt="About Dev OP's"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Passionate About Creating Beautiful Spaces
            </h3>
            <p className="text-gray-600 mb-6">
              With over 5 years of experience in interior design and decoration, we specialize in creating 
              harmonious and functional spaces that reflect our clients' personalities and lifestyles.
            </p>
            <p className="text-gray-600 mb-6">
              Our approach combines contemporary design principles with timeless elements, ensuring that 
              each project is both modern and enduring. We believe in sustainable design practices and 
              work with eco-friendly materials whenever possible.
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 