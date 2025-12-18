import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

import Navbar from "./componets/Navbar"
import Hero from "./componets/Hero"
import Cocktails from "./componets/Cocktails"

gsap.registerPlugin(ScrollTrigger, SplitText)



const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails />
        </main>
    )
}

export default App