"use client";

import {
    Home,
    User,
    Code2,
    Layers,
    Briefcase,
    GraduationCap,
} from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Home,
    User,
    Code2,
    Layers,
    Briefcase,
    GraduationCap,
};

export default function Sidebar() {
    return (
        <nav
            className="fixed z-50 transition-all duration-300 nav-glass
        bottom-6 left-6 right-6 h-16 rounded-2xl flex justify-around items-center px-2
        md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-6 md:right-auto md:w-16 md:h-auto md:flex-col md:py-8 md:gap-8 md:rounded-full"
        >
            {NAV_ITEMS.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                    <a
                        key={item.label}
                        href={item.href}
                        className="sidebar-item relative group p-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                        {Icon && <Icon className="w-6 h-6" />}
                        <span className="sidebar-tooltip absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1 bg-surface border border-white/10 rounded-md text-xs font-semibold text-white opacity-0 -translate-x-2 scale-95 transition-all duration-200 pointer-events-none hidden md:block whitespace-nowrap shadow-xl z-50">
                            {item.label}
                        </span>
                    </a>
                );
            })}
        </nav>
    );
}
