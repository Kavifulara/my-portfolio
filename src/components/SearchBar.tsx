'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const popularCategories = [
  { name: 'Wall Art', href: '/category/wall-art' },
  { name: 'Rugs', href: '/category/rugs' },
  { name: 'Mirrors', href: '/category/mirrors' },
  { name: 'Sculptures', href: '/category/sculptures' },
  { name: 'Paintings', href: '/category/paintings' },
  { name: 'Curtains', href: '/category/curtains' },
  { name: 'Clocks', href: '/category/clocks' },
  { name: 'Posters', href: '/category/posters' },

]

const allProducts = [
  { name: 'Abstract Canvas Art', category: 'Wall Art', href: '/product/abstract-canvas-art' },
  { name: 'Vintage Persian Rug', category: 'Rugs', href: '/product/vintage-persian-rug' },
  { name: 'Decorative Wall Mirror', category: 'Mirrors', href: '/product/decorative-wall-mirror' },
  { name: 'Modern Bronze Sculpture', category: 'Sculptures', href: '/product/modern-bronze-sculpture' },
  { name: 'Modern Geometric Rug', category: 'Rugs', href: '/product/modern-geometric-rug' },
  { name: 'Vintage Wall Print', category: 'Wall Art', href: '/product/vintage-wall-print' },
  { name: 'Modern Round Mirror', category: 'Mirrors', href: '/product/modern-round-mirror' },
  { name: 'Abstract Sculpture', category: 'Sculptures', href: '/product/abstract-sculpture' },
]

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const router = useRouter()

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      setIsSearching(false)
      router.push(`/shop?search=${encodeURIComponent(searchTerm)}`)
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setIsSearching(true)
            }}
            onFocus={() => setIsSearching(true)}
            placeholder="Search for products..."
            className="w-full py-3 pl-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-full px-4 text-gray-500 hover:text-gray-700"
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Search Results Dropdown */}
        {isSearching && (
          <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200">
            {searchTerm ? (
              filteredProducts.length > 0 ? (
                <div className="py-2">
                  {filteredProducts.map((product, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsSearching(false)
                        router.push(product.href)
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      <div className="text-gray-900">{product.name}</div>
                      <div className="text-sm text-gray-500">in {product.category}</div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-gray-500">No products found</div>
              )
            ) : (
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Popular Categories</h3>
                <div className="grid grid-cols-2 gap-2">
                  {popularCategories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsSearching(false)
                        router.push(category.href)
                      }}
                      className="px-3 py-2 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 text-left"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  )
} 