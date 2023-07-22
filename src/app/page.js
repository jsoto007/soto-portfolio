import Header from './header'
import About from './about'
import Projects from './projects'
import Footer from './footer'

export default function Home() {
  return (
   <div className='max-w-screen-2xl mx-auto'>
    <Header />
    <About />
    <Projects />
    <Footer />
   </div>
  )
}
