import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-xl font-bold font-serif tracking-widest">
            AURELIAN ISLES
          </Link>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-sm font-serif italic">
            Exkluzivní zprostředkování prodeje a pronájmu soukromých ostrovů po celém světě. 
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Navigace</h4>
          <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li><Link href="/ostrovy" className="hover:text-blue-600">Ostrovy</Link></li>
            <li><Link href="/sluzby" className="hover:text-blue-600">Služby</Link></li>
            <li><Link href="/blog" className="hover:text-blue-600">Magazín</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Kontakt</h4>
          <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>info@soukromeostrovy.cz</li>
            <li>+420 123 456 789</li>
            <li>Praha, Česká republika</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} AURELIAN ISLES. Všechna práva vyhrazena.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-zinc-800 dark:hover:text-zinc-200">Ochrana údajů</Link>
          <Link href="/terms" className="hover:text-zinc-800 dark:hover:text-zinc-200">Podmínky užití</Link>
        </div>
      </div>
    </footer>
  );
}
