// import { Contact } from 'lucide-react'
import Achievments from './components/Achievments'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {

  return (
    <>
     <div className='bg-[#050816] h-screen w-[100%] '>
      <Hero/>
      <Achievments/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Toaster position="bottom-right" />
     </div>
    </>
  )
}

export default App
