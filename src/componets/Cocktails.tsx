import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { cocktailLists, mockTailLists } from '../../constants/index.js'

const Cocktails = () => {
    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        })

        parallaxTimeline
            .from('#c-left-leaf', {
                x: -100, y: 100
            })
            .from('#c-right-leaf', {
                x: 100, y: 100
            })
    })

    return (
        <section id="cocktails" className="noisy">
            <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
            <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

            <div className="list">
                <div className="popular bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg p-6 rounded-2xl">
                    <h2 className='flex justify-center'>Most popular cocktails</h2>

                    <ul className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg p-6 rounded-2xl">
                        {cocktailLists.map(({ name, country, detail, price }) => (
                            <li key={name}>
                                <div className="md:me-28">
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="loved bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg p-6 rounded-2xl">
                    <h2 className='flex justify-center'>Most loved mocktails</h2>

                    <ul className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg p-6 rounded-2xl">
                        {mockTailLists.map(({ name, country, detail, price }) => (
                            <li key={name}>
                                <div className="me-28">
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Cocktails