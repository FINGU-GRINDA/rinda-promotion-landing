"use client";

import { useEffect, useState } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-n-black/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-5"
                }`}
        >
            <div className="container-default flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center" style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
                    <img 
                        src="/Union.svg" 
                        alt="Rinda Union" 
                        className="h-3 w-auto"
                        style={{ marginRight: '0.5rem' }}
                    />
                </div>
            </div>
        </header>
    );
}
