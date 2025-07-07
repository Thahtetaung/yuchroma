import TestimonialImg from '../assets/images/ui/home_testimonial_bg.jpg';
import { Link } from 'react-router-dom'

export default function Testimonial() {
    return (
        <>
            <section>
                
                <div className="flex items-center justify-center relative">
                    <img src={TestimonialImg} alt="" className="w-full h-[560px] object-cover object-center" />
                    <div className="absolute">
                        <div className="flex items-center justify-center flex-col space-y-2" >
                            <div className="w-[300px] md:w-[500px] text-left px-2">
                                <p className="text-black leading-8 italic">
                                    “I believe photos are not only photographs but also tell a story and hold memories that inspire us to cherish every moment. I really want to capture my special moments, and I found Yu, a true artist who embodies professionalism, passion, and patience in photography. I'm so grateful to have the opportunity to capture my special moment with her, and every time I see my photos, I always feel uplifted and satisfied.”
                                </p>
                                <p className='text-black text-right'>
                                    - Seng Lon (Pre-wedding)
                                </p>
                            </div>

                        <Link to='/hireme'>
                            <button className="hero_btn" aria-label='work with me'>Work with me</button>
                        </Link>
                        </div> 
                    </div> 
                </div>
            </section>
        </>
    )
}