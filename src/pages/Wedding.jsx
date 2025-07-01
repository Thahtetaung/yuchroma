import Hero from '../components/Hero.jsx';
import Portfoliowedding from '../components/Portfoliowedding.jsx';
import Testimonial from '../components/Testimonial.jsx';
import PortfolioImg from '../assets/images/portfolio_hero.jpg';

export default function Wedding(){
    const PortfolioImgBg ="w-full h-[560px] object-cover object-center"
    return (
        <>
            <Hero img={PortfolioImg} className={PortfolioImgBg}/>
            <Portfoliowedding />
            <Testimonial />
        </>
    )
}