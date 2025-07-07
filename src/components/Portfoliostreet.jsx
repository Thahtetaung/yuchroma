import { streetData } from '../data/Streetdata.js'
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { Link } from 'react-router-dom'
import 'yet-another-react-lightbox/styles.css';

export default function Portfoliostreet() { 
    const [open , setIsOpen ] = useState(false);
    const [index , setIndex ] = useState(0)

    const slides = streetData.map((item) => ({ src: item.img }))


    return (
        <>
            <section>
                <div className="w-full flex items-center justify-center py-4 flex-col px-4">
                    <h1 className="text-4xl font-bold py-2">Street</h1>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {streetData.map((item , i) => (
                            <div
                                key={item.id}
                                className={`rounded-lg overflow-hidden ${item.className ?? ''}
                                ${item.className?.includes('col-span-2') ? 'aspect-[16/9]' : 'aspect-[1/1]'} `}
                                onClick={ () =>{
                                    setIndex(i);
                                    setIsOpen(true);
                                }
                                }>
                                <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover"/>
                            </div>
                            ))}
                        </div>
                        {open && 
                            <Lightbox 
                                open={open}
                                close={() => setIsOpen(false)}
                                slides={slides}
                                index={index}
                            />
                        }
                </div>
                <div className='py-2 flex items-center justify-center'>
                  <Link to='/portfolio/food' className=' hover:underline hover:font-bold text-lg duration-100'>See Food</Link>
                </div>
            </section>
        </>
    )
}