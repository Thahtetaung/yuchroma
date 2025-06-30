export default function Aboutmetext() {
    return (
        <section className="p-4">
            <div className="flex items-center max-w-[1100px] mx-auto lg:flex-row flex-col gap-6">
                    <div className="flex items-end justify-end lg:w-1/2 lg:text-right font-bold font-custom">
                       <h2 className="hidden lg:flex lg:text-5xl flex-col space-y-2">
                            <span>Fair Warning: I'm a</span>
                            <span>bit of a</span>
                            <span>perfectionist</span>
                        </h2>
                        <h2 className="lg:hidden flex text-3xl items-start">Fair Warning: I'm a bit of a perfectionist</h2>
                    </div>
                    <div className="lg:w-1/2 space-y-4">
                        <p className="text-lg font-custom">which means I'm never completely satisfied with my work (there's always a better angle somewhere). But maybe that's not such a bad thing—it keeps me pushing for better shots.</p>
                        <p className="text-lg font-custom">My goal is simple: create images that make you feel something every time you look at them. Whether that's the way the light looked that evening, how happy you felt in that moment, or just how ridiculously good that pasta looked.</p>
                    </div>
            </div>
        </section>
    )
}