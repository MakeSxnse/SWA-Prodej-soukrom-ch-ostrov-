export default function Proces() {
    return (
        <div className="w-full bg-white py-24 md:py-32">
            <div className="mx-[5%] flex flex-col items-center text-center gap-12">
                <div className="flex flex-col gap-6 max-w-3xl">
                    <h2 className="text-[0.9rem] font-sans text-[#785A1A] tracking-[0.3em] font-medium uppercase">
                        AKVIZIČNÍ CESTA
                    </h2>
                    <p className="text-[1rem] md:text-[2rem] font-serif text-black leading-tight">
                        Proces definovaný precizností
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-8 w-full max-w-7xl">
                    {[
                        { title: "Konzultace vizí", desc: "Hluboké porozumění vašim požadavkům na soukromí a životní styl." },
                        { title: "Privátní screening", desc: "Přístup k off-market portfoliu a diskrétním příležitostem." },
                        { title: "Právní architektura", desc: "Strukturování akvizice s důrazem na bezpečnost a daňovou efektivitu." },
                        { title: "Předání klíčů", desc: "Plynulý přechod vlastnictví včetně kompletního nastavení služeb." }
                    ].map((step, i) => (
                        <div key={i} className="flex flex-col items-start text-left gap-4">
                            <span className="text-4xl font-serif text-[#785A1A] font-light">0{i + 1}</span>
                            <h3 className="text-xl font-serif text-[#001B3A] font-semibold">{step.title}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}