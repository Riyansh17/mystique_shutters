// src/app/page.tsx
import HeroSection from '@/components/sections/HeroSection'
import GallerySection from '@/components/sections/GallerySection'
import FeaturedStories from '@/components/sections/FeaturedStories'
import ContactCTA from '@/components/sections/ContactCTA'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GallerySection />
      <FeaturedStories />
      <ContactCTA />
    </>
  )
}
