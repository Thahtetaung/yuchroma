import Hero from '../components/Hero.jsx';
import Portfolioportraits from '../components/Portfolioportraits.jsx';
import Testimonial from '../components/Testimonial.jsx';
import PortfolioImg from '../assets/images/portfolio_hero.jpg';

export default function Portraits(){
    const PortfolioImgBg ="w-full h-[560px] object-cover object-center"
    return (
        <>
            <Hero img={PortfolioImg} className={PortfolioImgBg}/>
            <Portfolioportraits />
            <Testimonial />
        </>
    )
}