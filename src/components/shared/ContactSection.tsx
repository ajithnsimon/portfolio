import { Mail, Linkedin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="glass-card p-10 md:p-16 rounded-3xl text-center relative overflow-hidden group"
        >
            {/* Decorative Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-gradient-to-b from-primary/20 to-transparent blur-[80px] group-hover:from-primary/30 transition-all" />

            <div className="relative z-10 space-y-6">
                <h2 className="text-4xl font-bold text-white">
                    Let&apos;s build something scalable.
                </h2>
                <p className="text-slate-400 max-w-lg mx-auto">
                    I&apos;m open to leadership roles where I can drive engineering impact.
                    Whether you have a complex architecture challenge or need a team lead,
                    let&apos;s talk.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                    >
                        <Mail className="w-4 h-4" />
                        {SITE_CONFIG.email}
                    </a>
                    <a
                        href={SITE_CONFIG.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-full bg-surface border border-white/10 text-white font-bold hover:bg-surface-highlight transition-all flex items-center justify-center gap-2"
                    >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}
