import gsap from 'gsap';
import { SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { featureLists } from '../../constants/index.js'

const About = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#about h2', {
            type: 'words'
        })

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center'
            }
        })

        scrollTimeline
            .from(titleSplit.words, {
                opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
            })
            .from('.top-grid div, .bottom-grid div', {
                opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
            }, '-=0.5')
    })

    return (
        <div id="about">
            <div className="mb-16 md:px-0 px-5">
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">Best Cocktails</p>
                        <h2>
                            Where every detail matters <span className="text-white">-</span>
                            from muddle to garnish
                        </h2>
                    </div>

                    <div className="sub-content">
                        <p>
                            Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
                        </p>

                        <div>
                            <p className="md:text-3xl text-xl font-bold">
                                <span>4.5</span>/5
                            </p>
                            <p className="text-sm text-white">
                                More than +12000 customers
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-grid">
                <div className="md:col-span-3">
                    <div className="noisy" />
                    <img src="/images/abt1.png" alt="Cocktail preparation - mudding fresh ingredients" />
                </div>

                {/* FIXED: Added proper background and styling */}
                <div className="md:col-span-3 relative overflow-hidden rounded-3xl">
                    {/* Gradient background layer */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 backdrop-blur-md" />

                    {/* Border and glow effect */}
                    <div className="absolute inset-0 border border-white/20 rounded-3xl shadow-[0_0_30px_rgba(231,211,147,0.15)]" />

                    {/* Content with proper z-index */}
                    <div className="relative z-10 p-8 flex flex-col justify-center h-full">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                            Crafted to Impress
                        </h2>

                        <hr className="border-white/30 mb-8" />

                        <ul className="space-y-5">
                            {featureLists.map((item, index) => (
                                <li key={index} className="flex items-center gap-4 group">
                                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-yellow/10 rounded-full group-hover:bg-yellow/20 transition-colors">
                                        <img
                                            src="/images/check.png"
                                            alt=""
                                            className="w-4 h-4 object-contain"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p className="text-base md:text-lg text-white/90 font-light leading-relaxed">
                                        {item}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="md:col-span-6">
                    <div className="noisy" />
                    <img src="/images/abt4.png" alt="Signature cocktails on display" />
                </div>
            </div>

            <div className="bottom-grid">
                <div className="md:col-span-8">
                    <div className="noisy" />
                    <img src="/images/abt3.png" alt="Bar atmosphere with premium spirits" />
                </div>
                <div className="md:col-span-4">
                    <div className="noisy" />
                    <img src="/images/abt2.png" alt="Fresh garnishes and ingredients" />
                </div>
            </div>
        </div>
    )
}

export default About