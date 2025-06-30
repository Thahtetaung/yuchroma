import useEmblaCarousel from "embla-carousel-react"
import "../styles/Aboutmework.css";
import {Link } from "react-router-dom";

export default function Aboutmework() {
    const [emblaRef] = useEmblaCarousel({
        loop: false,
        align:"center",
        draggable:true
    });
    return (
        <>
            <section className="py-4">
                <div className="overflow-hidden embla" ref={emblaRef}>
                    <div className="embla__container" id="aboutme_work_container">
                        <div className="embla__slide aboutme_work">
                            <h2 className="font-bold text-3xl"><a href="#">Food</a></h2>
                            <p className="text-xl">Food photography is honestly my zen place. Great lighting, beautiful plating, zero complaints about camera angles. It's basically the perfect client relationship.</p>
                        </div>
                        <div className="embla__slide aboutme_work">
                            <h2 className="font-bold text-3xl"><a href="#">Wedding</a></h2>
                            <p className="text-xl">Wedding photography keeps me on my toes. Every wedding is different, and I love the challenge of documenting your story as it unfolds. Plus, there's something pretty special about being trusted with once-in-a-lifetime moments.</p>
                        </div>
                        <div className="embla__slide aboutme_work">
                            <h2 className="font-bold text-3xl"><a href="#">Portraits</a></h2>
                            <p className="text-xl">Portraits and couples sessions are where I get to capture genuine connections. I'm not big on stiff poses—I'd rather photograph you laughing at your partner's terrible joke or getting lost in conversation. Those real moments always make the best images.</p>
                        </div>
                    </div>
                </div>
                <Link to="/portfolio" id="aboutme_work_link"> See more of what I can create for you</Link>
               
            </section>
        </>
    )
}