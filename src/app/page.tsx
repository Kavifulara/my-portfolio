import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import FeaturedProducts from '@/components/FeaturedProducts'
import Categories from '@/components/Categories'

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <div className="-mt-24 relative z-10">
        <SearchBar />
      </div>
      <Categories />
      <FeaturedProducts />
    </div>
  )
} 