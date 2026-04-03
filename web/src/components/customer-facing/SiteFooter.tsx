export function SiteFooter() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800/50">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto w-full py-12 px-8">
        <div className="flex flex-col gap-2">
          <div className="font-headline text-xl font-black text-neutral-100">Alarynt</div>
          <p className="text-neutral-500 text-xs tracking-wide">Data Architects for the Growing Enterprise.</p>
        </div>
        <div className="flex gap-8">
          <a className="text-neutral-500 hover:text-neutral-300 transition-colors text-sm tracking-wide" href="#">
            Privacy Policy
          </a>
          <a className="text-neutral-500 hover:text-neutral-300 transition-colors text-sm tracking-wide" href="#">
            LinkedIn
          </a>
        </div>
        <div className="text-neutral-500 text-sm tracking-wide">
          © {new Date().getFullYear()} Alarynt. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
