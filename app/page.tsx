import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import SocialButtons from '@/components/SocialButtons'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Experience />
        <Services />
        <Contact />
      </main>
      <SocialButtons />
    </>
  )
}
