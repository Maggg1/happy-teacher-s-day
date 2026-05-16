import FloatingPetals    from './components/FloatingPetals'
import HeroSection       from './components/HeroSection'
import JellySection      from './components/JellySection'
import AppreciationSection from './components/AppreciationSection'
import QuoteCards        from './components/QuoteCards'
import GallerySection    from './components/GallerySection'
import Footer            from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingPetals />
      <main>
        <HeroSection />
        <JellySection />
        <AppreciationSection />
        <QuoteCards />
        <GallerySection />
        <Footer />
      </main>
    </div>
  )
}
