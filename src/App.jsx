import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Project from "./components/Project"
import Insights from "./components/Insights"
import Testimonial from "./components/Testimonial"
import Contact from "./components/Contact"
import { Footer } from "./components/Footer"
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-900 antialiased
    selection:bg-blue-300 selection:text-blue-400">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
      </div>
      
      <div className="container mx-auto px-3">
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Insights/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      </div>
      
    </div>
    
  )
}

export default App