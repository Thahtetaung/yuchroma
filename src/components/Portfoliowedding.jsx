import { weddingData }  from '../data/Weddingdata.js';

export default function Wedding() {
    return (
        <>
        <section>
            <div className="w-full bg-gray-100 flex items-center justify-center py-4 flex-col px-4">
                <h1 className="text-4xl font-bold text-gray-800 py-2">Wedding</h1>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-2 '>
                {weddingData.map((item) => (
                    <div key={item.id} className="rounded-lg aspect-[3/4] overflow-hidden">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                ))}
                </div>
            </div>
        </section>
            
        </>
    );
}