'use client'

export default function AddToCartButton() {
  return (
    <button
      className="w-full bg-secondary text-white py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors"
      onClick={() => {
        // Add to cart functionality will be implemented later
        alert('Added to cart!')
      }}
    >
      Add to Cart
    </button>
  )
} 