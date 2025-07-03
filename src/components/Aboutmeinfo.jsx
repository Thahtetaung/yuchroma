import MeImg from '../assets/images/ui/me.jpg';
import '../styles/Aboutmeinfo.css';

export default function Aboutmeinfo(){
    return (
        <>
            <section id='aboutme_section'>
                {/* About Me Mobile Screen */}
                <div id='aboutme_mobile'>
                        <div id='aboutme_img_container_mobile'>
                            <img src={MeImg} alt="Photo of Me" className='aboutme_img'/>
                        </div>
                        <div className="order-1">
                            <h2 id='aboutme_info_header_mobile'>A bit about me</h2>
                        </div>
                        <div className="order-2 px-4">
                            <p className="aboutme_info_mobile">Hi, I'm Yu, the photographer behind YuChroma—and yes, I'm probably a little too obsessed with my camera.What started as a hobby quickly became an addiction to capturing perfect moments.</p>
                        </div>
                        <div className="order-4 px-4">
                            <p className="aboutme_info_mobile">You know that feeling when everything just clicks? The light hits exactly right, someone laughs genuinely, or a dish looks so good it should have its own Instagram account? That's what I live for.</p>
                        </div>
                        <div className="order-5 p-4">
                            <p className="aboutme_info_mobile">I specialize in food photography (because food never asks for retakes), portraits, couples sessions, and weddings. My approach is pretty simple: I stay out of your way and let real moments happen naturally. No awkward "act casual" directions here—I'd rather catch you being authentically you.</p>
                        </div>
                </div>
                {/* About Me Large and Medium Screen  */}
                <div id='aboutme_largescreen_container'>
                    <div id='aboutme_img_largescreen_container'><img src={MeImg} alt="Photo of me" className='aboutme_img' /></div>
                    <div id='aboutme_info_largescreen_container'>
                        <h2 id='aboutme_info_largescreen_header'>A bit about me</h2>
                        <p className="aboutme_info_mobile">Hi, I'm Yu, the photographer behind YuChroma—and yes, I'm probably a little too obsessed with my camera.What started as a hobby quickly became an addiction to capturing perfect moments.</p>
                        <p className="aboutme_info_mobile">You know that feeling when everything just clicks? The light hits exactly right, someone laughs genuinely, or a dish looks so good it should have its own Instagram account? That's what I live for.</p>
                        <p id='aboutme_info_text'>I specialize in food photography (because food never asks for retakes), portraits, couples sessions, and weddings. My approach is pretty simple: I stay out of your way and let real moments happen naturally. No awkward "act casual" directions here—I'd rather catch you being authentically you.</p>
                    </div> 
                </div>
                <p id='aboutme_info'>I specialize in food photography (because food never asks for retakes), portraits, couples sessions, and weddings. My approach is pretty simple: I stay out of your way and let real moments happen naturally. No awkward "act casual" directions here—I'd rather catch you being authentically you.</p>

            </section>
        </>
    )
}