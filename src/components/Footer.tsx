import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              Decor Haven brings you the finest selection of decorative items for your home.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-white">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-white">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/wall-art" className="text-gray-300 hover:text-white">
                  Wall Art
                </Link>
              </li>
              <li>
                <Link href="/category/rugs" className="text-gray-300 hover:text-white">
                  Rugs
                </Link>
              </li>
              <li>
                <Link href="/category/mirrors" className="text-gray-300 hover:text-white">
                  Mirrors
                </Link>
              </li>
              <li>
                <Link href="/category/sculptures" className="text-gray-300 hover:text-white">
                  Sculptures
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to get updates on new products and special offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
              />
              <button
                type="submit"
                className="bg-secondary hover:bg-opacity-90 px-4 py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Decor Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 