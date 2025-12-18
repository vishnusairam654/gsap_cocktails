import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

import Navbar from "./componets/Navbar"
import Hero from "./componets/Hero"

gsap.registerPlugin(ScrollTrigger, SplitText)



const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <div className="h-dvh bg-black"></div>
        </main>
    )
}

export default App