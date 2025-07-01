import Hero from '../components/Hero.jsx';
import Portfoliofood from '../components/Portfoliofood.jsx';
import PortfolioImg from '../assets/images/portfolio_hero.jpg';
import Testimonial from '../components/Testimonial.jsx';

export default function Food(){
    const PortfolioImgBg ="w-full h-[560px] object-cover object-center"
    return (
        <>
            <Hero img={PortfolioImg} className={PortfolioImgBg}/>
            <Portfoliofood />
            <Testimonial />
        </>
    )
}