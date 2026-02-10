import { Github, Linkedin, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function HeroSection() {
    return (
        <header className="pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col items-start gap-8">
            <div className="space-y-4 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                    Ajith NS <br />
                    <span className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x block mt-2 pb-4">
                        Engineering Lead – Full Stack
                    </span>
                </h1>
                <p className="text-lg md:text-2xl text-slate-300 leading-relaxed font-light border-l-4 border-primary pl-6 py-2 mt-2">
                    &ldquo;I build scalable systems, lead engineering teams, and ship
                    production-ready platforms.&rdquo;
                </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
                <a
                    href={SITE_CONFIG.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition-colors"
                    aria-label="GitHub"
                >
                    <Github className="w-5 h-5" />
                </a>
                <a
                    href={SITE_CONFIG.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-[#0077b5] transition-colors"
                    aria-label="LinkedIn"
                >
                    <Linkedin className="w-5 h-5" />
                </a>
                <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-slate-500 hover:text-accent transition-colors"
                    aria-label="Email"
                >
                    <Mail className="w-5 h-5" />
                </a>
            </div>
        </header>
    );
}
