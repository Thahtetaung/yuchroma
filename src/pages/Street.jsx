import Hero from '../components/Hero.jsx';
import Portfoliostreet from '../components/Portfoliostreet.jsx';
import Testimonial from '../components/Testimonial.jsx';
import PortfolioImg from '../assets/images/ui/portfolio_hero.jpg';

export default function Street(){
    const PortfolioImgBg ="w-full h-[560px] object-cover object-center"
    return (
        <>
            <Hero img={PortfolioImg} className={PortfolioImgBg}/>
            <Portfoliostreet />
            <Testimonial />
        </>
    )
}