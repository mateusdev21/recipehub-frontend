import Image from "next/image";
import { useEffect, useState } from "react";

const HeroCarousel = ({ slides = [] }) => {
    const [current, setCurrent] = useState(0);

    /**
     * Reset index when slides change
     * This prevents out-of-bounds index issues
     */
    useEffect(() => {
        if (slides.length > 0) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCurrent(0);
        }
    }, [slides]);

    /**
     * Autoplay logic
     * Only runs when slides are available
     */
    useEffect(() => {
        if (slides.length === 0) return;

        const interval = setInterval(() => {
            setCurrent((prev) => {
                const nextIndex = prev + 1;
                return nextIndex >= slides.length ? 0 : nextIndex;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    /**
     * Guard clause: do not render carousel if no slides
     */
    if (!slides || slides.length === 0) {
        return null;
    }

    return (
        <section className="relative h-[70vh] w-full overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id ?? index}
                    className={`absolute inset-0 transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {/* Background Image */}
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        layout="fill"
                        objectFit="cover"
                        className="h-full w-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Content */}
                    <div className="relative z-10 flex h-full items-center">
                        <div className="mx-auto max-w-7xl px-6">
                            <h1 className="max-w-2xl text-4xl font-bold text-white md:text-5xl">
                                {slide.title}
                            </h1>
                            {slide.description && (
                                <p className="mt-4 max-w-xl text-lg text-gray-200">
                                    {slide.description}
                                </p>
                            )}
                            {slide.cta && (
                                <button className="mt-6 rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-200">
                                    {slide.cta}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-3 w-3 rounded-full transition ${index === current ? "bg-white" : "bg-white/40"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroCarousel;

