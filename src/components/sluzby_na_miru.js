import Image from "next/image";
import Link from "next/link";

export default function SluzbyNaMiru() {
    return (
        <div className="w-full bg-gray-100 flex justify-center items-center py-12 md:py-24 lg:py-32">
            <div className="mx-[5%] flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
                <div className="w-full aspect-square md:w-[300px] md:h-[300px] lg:w-[560px] lg:h-[560px] relative overflow-hidden">
                    <Image src="/letadlo.png" alt="Služby na míru" fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-4 md:gap-6 max-w-2xl">
                    <h2 className="text-sm md:text-base lg:text-[1rem] font-sans text-[#785A1A] tracking-[0.3em] font-medium uppercase">
                        SLUŽBY NA MÍRU
                    </h2>
                    <p className="text-sm md:text-base font-sans text-black leading-tight mb-[16px] md:mb-[24px] lg:mb-[32px]">
                        Od zajištění privátní letecké dopravy po komplexní správu vašeho ostrovního sídla. Náš tým concierge se postará o každý detail, zatímco vy si užíváte nerušený klid.
                    </p>

                    <div className="flex gap-4 md:gap-[20px] items-center">
                        <Image src="/flight_takeoff_24dp_785A1A_FILL0_wght400_GRAD0_opsz24.svg" alt="Služby na míru" width={22} height={22} className="rounded-lg object-cover" />
                        <p>AURELIAN AVIATION</p>
                    </div>
                    
                    <div className="flex gap-4 md:gap-[20px] items-center">
                        <Image src="/foundation_24dp_785A1A_FILL0_wght400_GRAD0_opsz24.svg" alt="Služby na míru" width={22} height={22} className="rounded-lg object-cover" />
                        <p>SPRÁVA MAJETKU</p>
                    </div>

                    <div className="flex gap-4 md:gap-[20px] items-center">
                        <Image src="/concierge_24dp_785A1A_FILL0_wght400_GRAD0_opsz24.svg" alt="Služby na míru" width={22} height={22} className="rounded-lg object-cover" />
                        <p>LIFESTYLE CONCIERGE</p>
                    </div>

                    <Link href="/kolekce" className="w-fit px-6 py-3 md:px-8 md:py-4 bg-[#011C3B] border text-white font-sans text-xs md:text-sm tracking-widest hover:bg-transparent hover:border hover:border-[#011C3B] hover:text-[#011C3B] transition-colors uppercase mt-4 md:mt-[16px]">
                        OBJEVIT NAŠE SLUŽBY
                    </Link>
                </div>
            </div>
        </div>
    )
}