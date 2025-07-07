import { foodData } from '../data/Fooddata.js';

import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Lightbox } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'

export default function Food() { 
  const [open , setOpen] = useState(false)
  const [index , setIndex ] = useState(0)

  const slides = foodData.map((item) => ({src: item.img}))
  
  useEffect(() => {
    window.scrollTo({ top: 0 , behavior: "smooth" })
  }, [])
    return (
        <>
            <section>
              <div className="w-full flex items-center justify-center py-4 flex-col px-4">
                <h1 className="text-4xl font-bold py-2">Food</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {foodData.map((item , i) => (
                    <div
                      key={item.id}
                      className={`rounded-lg overflow-hidden ${item.className ?? ''}
                      ${item.className?.includes('col-span-2') ? 'aspect-[2/1]' : 'aspect-[1/1]'} `}
                      onClick={()=> {
                        setOpen(true)
                        setIndex(i)
                      }}>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading='lazy'/>
                    </div>
                  ))}
                </div>
                {open && 
                <Lightbox 
                  open={open}
                  close={() => setOpen(false)}
                  slides={slides}
                  index={index}
                />
                }
              </div>
                <div className='py-2 flex items-center justify-center'>
                  <Link to='/portfolio/portraits' className=' hover:underline hover:font-bold text-lg duration-100'>See Portraits</Link>
                </div>
            </section>
        </>
    )
}