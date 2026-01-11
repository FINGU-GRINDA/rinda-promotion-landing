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
                <div className="font-extrabold text-xl tracking-tight text-white">
                    RINDA<span className="text-primary">.</span>
                </div>

                {/* Early Bird Badge */}
                <div className="flex items-center gap-2">
                    <div className="bg-alert/20 border border-alert/30 text-alert px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-alert opacity-75" style={{ animationDuration: '2s' }}></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-alert"></span>
                        </span>
                        얼리버드 마감 D-3
                    </div>
                </div>
            </div>
        </header>
    );
}
