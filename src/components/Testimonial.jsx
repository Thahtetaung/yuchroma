import TestimonialImg from '../assets/images/ui/home_testimonial_bg.jpg';

export default function Testimonial() {
    return (
        <>
            <section>
                
                <div className="flex items-center justify-center relative">
                    <img src={TestimonialImg} alt="" className="w-full h-[560px] object-cover object-center" />
                    <div className="absolute">
                        <div className="flex items-center justify-center flex-col space-y-2" >
                            <div className="w-[600px] text-left">
                                <p className="text-black leading-8 italic">
                                    “I believe photos are not only photographs but also tell a story and hold memories that inspire us to cherish every moment. I really want to capture my special moments, and I found Yu, a true artist who embodies professionalism, passion, and patience in photography. I'm so grateful to have the opportunity to capture my special moment with her, and every time I see my photos, I always feel uplifted and satisfied.”
                                </p>
                                <p className='text-black text-right'>
                                    - Seng Lon (Pre-wedding)
                                </p>
                                
                            </div>

                            <button className="bg-blue-600 py-2 px-4 rounded-md">Work with me</button>
                        </div> 
                    </div> 
                </div>
            </section>
        </>
    )
}