import Link from "next/link";
import Image from "next/image";

export function Kolekce() {
    return (
        <div className="bg-zinc-50 w-full">
            <div className="mx-[5%] py-16 flex flex-col gap-16">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <h1 className="text-[0.9rem] font-sans text-[#785A1A] tracking-[0.3em] font-medium uppercase">
                            KOLEKCE
                        </h1>
                        <p className="text-[1.5rem] md:text-[2rem] font-serif text-zinc-800 leading-tight">
                            Kurátorský výběr nejexkluzivnějších destinací světa
                        </p>
                    </div>
                    <Link href="/kolekce" className="px-8 py-4 bg-transparent border border-[#785A1A] text-[#785A1A] font-sans text-sm tracking-widest hover:bg-[#785A1A] hover:text-white transition-colors uppercase whitespace-nowrap">
                        ZOBRAZIT KOLEKCI
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
                    {/* Left Rectangle (2/3) */}
                    <Link href="/kolekce/destinace-1" className="group relative overflow-hidden h-[500px] md:col-span-2 block">
                        <Image
                            src="/kolekce1_upscayl_3x_upscayl-standard-4x.png"
                            alt="Exkluzivní rezidence"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-10 left-10 text-white">
                            <p className="text-[0.7rem] tracking-[0.3em] uppercase mb-2 opacity-80">Francouzská Polynésie</p>
                            <h3 className="text-3xl font-serif">L'Île de la Sérénité</h3>
                        </div>
                    </Link>

                    <Link href="/kolekce/destinace-2" className="group relative overflow-hidden h-[500px] md:col-span-1 block md:mt-[100px]">
                        <Image
                            src="/kolekce2_upscayl_3x_upscayl-standard-4x.png"
                            alt="Panoramatický výhled"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-10 left-10 text-white">
                            <p className="text-[0.7rem] tracking-[0.3em] uppercase mb-2 opacity-80">Středomoří</p>
                            <h3 className="text-3xl font-serif">Astraia Cliffside</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}