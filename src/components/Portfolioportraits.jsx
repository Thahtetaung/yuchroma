import { portraitsData } from '../data/Portraitsdata.js';

export default function Portfolioportraits() { 
    return (
        <>
            <section>
                  <div className="w-full bg-gray-100 flex items-center justify-center py-4 flex-col px-4">
                    <h1 className="text-4xl font-bold text-gray-800 py-2">Portraits</h1>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {portraitsData.map((item) => (
                        <div
                          key={item.id}
                          className={`rounded-lg overflow-hidden ${item.className ?? ''}
                          ${item.className?.includes('col-span-2') ? 'aspect-[16/9]' : 'aspect-[1/1]'} `}
                          
                        >
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
        </>
    )
}