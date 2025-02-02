
import { AboutMe } from "./components/AboutMe"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-2 py-8">
        
       <AboutMe/>
        <Projects/>
        <Skills/>
      </main>
    </div>
  )
}
