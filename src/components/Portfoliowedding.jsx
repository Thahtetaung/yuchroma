import { useState , useEffect } from 'react';
import { weddingData } from '../data/Weddingdata.js';
import Lightbox from 'yet-another-react-lightbox';
import { Link } from 'react-router-dom'
import 'yet-another-react-lightbox/styles.css';

export default function Wedding() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = weddingData.map((item) => ({ src: item.img }));

    useEffect(() => {
        window.scrollTo({ top: 0 , behavior: "smooth" })
    }, [])

  return (
    <section>
      <div className="w-full flex items-center justify-center py-4 flex-col px-4">
        <h1 className="text-4xl font-bold py-2">Wedding</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {weddingData.map((item, i) => (
            <div
              key={item.id}
              className="rounded-lg aspect-[3/4] overflow-hidden cursor-pointer"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
                loading='lazy'
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {open && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={slides}
            index={index}
          />
        )}
      </div>
            <div className='py-2 flex items-center justify-center'>
                  <Link to='/portfolio/street' className=' hover:underline hover:font-bold text-lg duration-100'>See Street</Link>
            </div>
    </section>
  );
}
