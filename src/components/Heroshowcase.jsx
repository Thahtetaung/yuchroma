import '../styles/Heroshowcase.css';
import { showcaseImages } from "../data/showcase.js"; 
import useEmblaCarousel from 'embla-carousel-react';

export default function Heroshowcase() {
    const [emblaRef] = useEmblaCarousel({ loop: false , draggable: true});
    return (
        <>
            <section>
                <div id="showcase_container">
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <h3 className="showcase_header">Stories through my lens</h3>
                            <h3 className="showcase_header1">Portfolio</h3>
                        </div>
                        <div className="showcase_textcontainer">
                            <p className="showcase_text">A picture paints a thousand words. And a thousand pixels paint stories. Explore my work in weddings, portraits, food, and street photography </p>
                        </div>
                    </div>
                     <div className='embla overflow-hidden pb-2' ref={emblaRef}>
                        <div id='showcase_images' className='embla__container'>
                            {showcaseImages.map((item) => (
                                <div key={item.id} className="group embla__slide images_container">
                                    <a href="#">
                                        <img src={item.image} alt={item.title} className="images"/>
                                        <div className="overlay">
                                            <span className="image_title">{item.title}</span>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>   
                     </div>
                     <div id='showcase_link'>
                        <a href="#">See More of what I can create for you</a>
                     </div>
                </div>
            </section>
        </>
    )
}