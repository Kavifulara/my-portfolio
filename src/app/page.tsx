import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import FeaturedProducts from '@/components/FeaturedProducts'
import Categories from '@/components/Categories'
import dynamic from 'next/dynamic';
const LeafletMap = dynamic(() => import('../components/LeafletMap'), { ssr: false });

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <div className="-mt-24 relative z-10">
        <SearchBar />
      </div>
      <Categories />
      <FeaturedProducts />
   <div>
          <h1>Welcome to My Map Page</h1>
          <LeafletMap />
      </div>
    </div>
  )
} 