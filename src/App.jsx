import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

import Navbar from "./componets/Navbar"
import Hero from "./componets/Hero"
import Cocktails from "./componets/Cocktails"
import About from "./componets/About"
import Art from "./componets/Art"
import Menu from "./componets/Menu"
import Contact from "./componets/Contact"


gsap.registerPlugin(ScrollTrigger, SplitText)



const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails />
            <About />
            <Art />
            <Menu />
            <Contact />
        </main>
    )
}

export default App