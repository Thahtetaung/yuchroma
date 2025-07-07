import { portraitsData } from '../data/Portraitsdata.js';
import { useState , useEffect } from 'react'
import { Lightbox } from 'yet-another-react-lightbox';
import { Link } from 'react-router-dom'
import 'yet-another-react-lightbox/styles.css'

export default function Portfolioportraits() { 
  const [open , setOpen] = useState(false)
  const [index , setIndex ] = useState(0)

  const slides = portraitsData.map((item) => ({src: item.img}))

  useEffect(() => {
    window.scrollTo({ top: 0 , behavior: "smooth" })
  })
    return (
        <>
            <section>
              <div className="w-full flex items-center justify-center py-4 flex-col px-4">
                <h1 className="text-4xl font-bold py-2">Portraits</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {portraitsData.map((item , i) => (
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
                        className="w-full h-full object-cover"/>
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
                  <Link to='/portfolio/wedding' className=' hover:underline hover:font-bold text-lg duration-100'>See Wedding</Link>
                </div>
            </section>
        </>
    )
}