'use client';

import HeroContent from "@/app/components/hero/HeroContent";
import HeroVisual from "@/app/components/hero/HeroVisual";

export default function Hero(){
    return(
        <section id="Home" className="min-h-screen flex flex-col justify-center pt-20 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/*Left: content */}
                <HeroContent />

                {/* Right: Visual */}
                <HeroVisual />
            </div>
        </section>
    );
}
