"use client";

import { useState } from "react";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/60 backdrop-blur-xl shadow-2xl shadow-black/50">
      <div className="relative flex items-center px-8 py-4 max-w-7xl mx-auto">
        <a href="/" className="font-headline text-2xl font-bold tracking-tighter text-neutral-50">
          Alarynt
        </a>

        {/* Desktop nav — absolutely centered */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          <a href="/" className="text-neutral-400 font-medium hover:text-neutral-100 transition-colors font-headline text-lg tracking-tight">
            Home
          </a>
          <a href="/capabilities" className="text-neutral-400 font-medium hover:text-neutral-100 transition-colors font-headline text-lg tracking-tight">
            Capabilities
          </a>
        </div>

        <a
          href="/#contact"
          className="hidden md:inline-flex items-center bg-primary-container text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-all ml-auto"
        >
          Book My Walkthrough
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-neutral-300 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-neutral-950/95 px-8 pb-6 flex flex-col gap-4">
          <a href="/" className="text-neutral-300 font-medium py-2" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="/capabilities" className="text-neutral-300 font-medium py-2" onClick={() => setMobileOpen(false)}>Capabilities</a>
          <a href="/#contact" className="bg-primary-container text-white px-6 py-2 rounded-lg font-medium text-center" onClick={() => setMobileOpen(false)}>
            Book My Walkthrough
          </a>
        </div>
      )}
    </nav>
  );
}
