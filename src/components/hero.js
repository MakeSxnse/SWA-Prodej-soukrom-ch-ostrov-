"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#000]">
            <div
                className={`absolute inset-0 transition-transform duration-[4000ms] ease-out brightness-75 ${mounted ? "scale-100" : "scale-110"
                    }`}
            >
                <Image
                    src="/hero_bg.jpg"
                    alt="Soukromý ostrov"
                    fill
                    className="object-cover -z-20"
                    priority
                />
            </div>

            <div className="absolute inset-0 bg-black/70 -z-10" />

            <div className="z-10 max-w-5xl w-full items-center justify-center font-sans flex flex-col gap-8 text-center px-6">
                <h1
                    className={`text-[1rem] font-light tracking-[0.3em] font-sans uppercase text-white/90 drop-shadow-lg transition-all duration-1000 delay-[400ms] ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                        }`}
                >
                    ABSOLUTNÍ SOUKROMÍ
                </h1>

                <p
                    className={`text-[1.5rem] md:text-[2.2rem] font-serif text-white leading-tight drop-shadow-xl transition-all duration-1000 delay-[700ms] ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                        }`}
                >
                    Vaše útočiště uprostřed nekonečného oceánu.
                </p>

                <div
                    className="flex gap-4 mt-8 justify-center font-sans"
                >
                    <div
                        className={`relative group transition-all duration-1000 delay-[1000ms] ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                            }`}
                    >
                        {/* Separate Blur Layer to ensure it's rendered during animation */}
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/30 -z-12" />

                        <Link
                            href="#ostrovy"
                            className="px-10 py-4 text-white font-medium hover:bg-white hover:text-[#001B3A] transition-all uppercase tracking-widest text-sm block"
                        >
                            PROZKOUMAT PORTFOLIO
                        </Link>
                    </div>
                </div>
            </div>

            <div
                className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-1000 delay-[1500ms] ${mounted ? "opacity-100" : "opacity-0"
                    }`}
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
            </div>
        </div>
    );
}
