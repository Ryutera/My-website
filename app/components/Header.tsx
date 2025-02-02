import HumbergerMenu from "./HumbergerMenu";
import ScrollLink from "./ScrollLink";


  


export default function Header() {

//     const [toggle, setToggle] =useState(false)

//     const onClickToggle= () =>{
// setToggle((prev)=>!prev)

//     }
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">My-website</div>
        <nav className="hidden md:flex space-x-4">
          <ScrollLink href="#about-me">About me</ScrollLink>
          <ScrollLink href="#projects">Projects</ScrollLink>
          <ScrollLink href="#skills">Skills</ScrollLink>
        </nav>
       <HumbergerMenu/>
      </div>
    </header>
  )
}
