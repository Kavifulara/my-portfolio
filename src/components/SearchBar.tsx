'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import WebSpeech from "./WebSpeech"; 


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
  { id: 1, name: 'Abstract Canvas Art', category: 'Wall Art' },
  { id: 3, name: 'Persian Style Rug', category: 'Rugs' },
  { id: 5, name: 'Decorative Wall Mirror', category: 'Mirrors' },
  { id: 7, name: 'Bronze Sculpture', category: 'Sculptures' },
  { id: 2, name: 'Vintage Wall Print', category: 'Wall Art' },
  { id: 4, name: 'Modern Geometric Rug', category: 'Rugs' },
  { id: 6, name: 'Modern Round Mirror', category: 'Mirrors' },
  { id: 8, name: 'Modern Abstract Sculpture', category: 'Sculptures' },
]

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const router = useRouter()

  const filteredProducts = query
    ? allProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      )
    : []

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query) {
      router.push(`/shop?q=${encodeURIComponent(query)}`)
      setShowSuggestions(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="relative">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setShowSuggestions(true)
            }}
            onFocus={() => setShowSuggestions(true)}
            className="w-full bg-white rounded-lg pl-4 pr-10 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="Search for products..."
          /><WebSpeech onSearch={(spoken) => setQuery(spoken)} />

          <button
            type="submit"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </button>
        </form>

        {showSuggestions && query && (
          <div
            className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg"
            onMouseDown={(e) => e.preventDefault()}
          >
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-900">Products</h3>
              <ul className="mt-2 space-y-2">
                {filteredProducts.map((product) => (
                  <li key={product.id}>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg"
                      onClick={() => {
                        router.push(`/product/${product.id}`)
                        setShowSuggestions(false)
                        setQuery('')
                      }}
                    >
                      <span className="text-sm text-gray-900">{product.name}</span>
                      <span className="ml-2 text-xs text-gray-500">
                        in {product.category}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              {filteredProducts.length === 0 && (
                <p className="text-sm text-gray-500 mt-2">No products found</p>
              )}
              

              <div className="mt-4 pt-4 border-t">
                <h3 className="text-sm font-medium text-gray-900">Categories</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {popularCategories.map((category) => (
                    <button
                      key={category.href}
                      className="text-xs text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200"
                      onClick={() => {
                        router.push(category.href)
                        setShowSuggestions(false)
                        setQuery('')
                      }}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 