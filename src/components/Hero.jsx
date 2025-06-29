import Homehero from '../assets/images/home_hero.jpg';
import Logo from '../assets/images/logo_full.png';
import '../styles/Hero.css';

export default function Hero() {
    return (
        <section>
            <div id='hero_container'>
                <img src={Homehero} alt="Hero" className="w-full h-[560px] object-cover object-center" />
                <div className="absolute top-100">
                    <div className="hero_header">
                        <div className="logo">
                            <a href="#"><img src={Logo} alt="" className="w-auto h-[70px] bg-center" /></a>
                        </div>
                    </div>
                    <div className="hero_text">
                        <p><a href="#">Wedding,</a> <a href="#">Portraits</a> and <a href="#">Foods</a></p>
                    </div>
                    <div className="hero_subtext">
                        <p>📍Twin Cities Area, MN</p>
                    </div>
                    <div className="text-center py-2">
                        <button className="hero_btn"><a href="#">Work with me</a></button>
                    </div>
                </div>
            </div>
        </section>
    );
}