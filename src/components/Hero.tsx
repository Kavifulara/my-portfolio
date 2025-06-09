import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover opacity-60"
          src="/images/hero-bg.jpg"
          alt="Decorative items background"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Transform Your Space
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Discover our curated collection of beautiful wall art, elegant rugs, and stunning decorative pieces that will bring life to your home.
        </p>
        <div className="mt-10">
          <Link
            href="/shop"
            className="inline-block bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  )
} 