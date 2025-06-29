import TestimonialImg from '../assets/images/home_testimonial_bg.jpg';

export default function Testimonial() {
    return (
        <>
            <section>
                
                <div class="flex items-center justify-center relative">
                    <img src={TestimonialImg} alt="" class="w-full h-[560px] object-cover object-center" />
                    <div class="absolute">
                        <div class="flex items-center justify-center flex-col" >
                            <p class="text-black">Some Content Here TBD</p>
                            <button class="bg-blue-600 py-2 px-4 rounded-xl">Work with me</button>
                        </div> 
                    </div> 
                </div>
            </section>
        </>
    )
}