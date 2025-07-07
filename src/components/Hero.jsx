import Homehero from '../assets/images/ui/home_hero.jpg';
import Logo from '../assets/images/ui/logo_full.png';
import { Link } from 'react-router-dom'
import '../styles/Hero.css';

export default function Hero({img = Homehero , className = "w-full h-[560px] object-cover object-center"}) {
    return (
        <section>
            <div id='hero_container'>
                <img src={img} alt="Hero" className={className} />
                <div className="absolute top-100">
                    <div className="hero_header">
                        <div className="logo">
                            <Link to='/'><img src={Logo} alt="Logo" className="w-auto h-[70px] bg-center" /></Link>
                        </div>
                    </div>
                    <div className="hero_text">
                        <p><Link to='/portfolio/wedding'>Wedding,</Link> <Link to='/portfolio/portraits'>Portraits</Link> and <Link to='/portfolio/food'>Foods</Link></p>
                    </div>
                    <div className="hero_subtext">
                        <p>📍Twin Cities Area, MN</p>
                    </div>
                    <div className="text-center py-2">
                        <Link to='/hireme'>
                            <button className="hero_btn" aria-label='work with me'>Work with me</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}