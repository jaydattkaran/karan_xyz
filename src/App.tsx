// import { Contact } from 'lucide-react'
import Achievments from './components/Achievments'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import Hero from './components/Hero'

function App() {

  return (
    <>
     <div className='bg-[#050816] h-screen w-screen '>
      <Hero/>
      <Achievments/>
      <Skills/>
      <Contact/>
      <Toaster position="bottom-right" />
     </div>
    </>
  )
}

export default App
