import { Briefcase, History } from "lucide-react";

const currentRoles = [
    {
        title: "Senior Team Lead",
        company: "Digilaw Legal Software Pvt Ltd",
        location: "Kochi, India",
        period: "03/2025 - Present",
        current: true,
        dotColor: "bg-accent",
        ringColor: "group-hover:ring-accent/20",
        markerColor: "marker:text-accent",
        titleHoverColor: "group-hover:text-accent",
        badgeBg: "bg-accent/10",
        badgeText: "text-accent",
        highlights: [
            { label: "Full-Stack Leadership:", text: "Led development using Laravel, Python, Node.js, and React/Next.js to deliver scalable web applications." },
            { label: "Backend Architecture:", text: "Designed high-performance REST APIs optimizing MySQL, PostgreSQL, and MongoDB queries." },
            { label: "Distributed Systems:", text: "Implemented Kafka, BullMQ, and Redis for efficient background processing and responsiveness." },
            { label: "AI & Automation:", text: "Integrated Vertex AI and Document AI for intelligent document processing and automated workflows via Apache Airflow." },
            { label: "Search & Scraping:", text: "Built Python scraping systems and implemented fast search using Typesense." },
            { label: "DevOps & CI/CD:", text: "Managed pipelines with Jenkins, GitHub Actions, Docker, and GCP/DigitalOcean deployments." },
            { label: "Team & Agile Management:", text: "Mentored 10+ developers, conducted code reviews, and led Agile sprint planning and release coordination." },
        ],
    },
    {
        title: "Team Lead",
        company: "Techfriar Technologies",
        location: "Kochi, India",
        period: "03/2023 - 02/2025",
        current: false,
        dotColor: "bg-slate-600",
        ringColor: "group-hover:bg-primary",
        markerColor: "marker:text-primary",
        titleHoverColor: "group-hover:text-primary",
        badgeBg: "bg-surface-highlight",
        badgeText: "text-slate-400",
        highlights: [
            { label: "Team Leadership:", text: "Managed a 15+ member team overseeing frontend and backend deliverables across 3 simultaneous projects." },
            { label: "Scalable Development:", text: "Built modules using Laravel, Node.js, and React.js, improving system performance." },
            { label: "DevOps Efficiency:", text: "Improved CI/CD pipelines using Jenkins and Docker, enabling faster and more reliable automated deployments." },
            { label: "Quality Assurance:", text: "Enforced coding standards through audits and reviews, mentoring junior developers to boost team productivity." },
            { label: "Strategic Planning:", text: "Coordinated with stakeholders to align technical decisions with business goals and ensured timely delivery." },
        ],
    },
];

const previousRoles = [
    {
        title: "Full Stack Developer",
        company: "Bloophant Leisure Pvt Ltd",
        period: "2022 - 2023",
        description: "Backend (Laravel/Express), Frontend (Next.js), Stripe/Razorpay integrations, Vercel & Jenkins deployments.",
    },
    {
        title: "Full Stack Developer",
        company: "Skyislimit Technologies",
        period: "2021 - 2022",
        description: "Laravel backend, Vue.js UI, Database optimization, RabbitMQ & Firebase integrations.",
    },
    {
        title: "Full Stack Developer",
        company: "Appeonix Creative Lab",
        period: "2019 - 2021",
        description: "Laravel/React development, SQL schema optimization, CI/CD with Jenkins & DigitalOcean, Real-time Socket.io.",
    },
    {
        title: "Backend Developer",
        company: "CloudMe IT Center",
        period: "2018 - 2019",
        description: "PHP/Laravel backend features, MySQL optimization, API debugging & Unit testing.",
    },
    {
        title: "Backend Developer",
        company: "WRIMT Health Solutions",
        period: "2017 - 2018",
        description: "Core PHP & Laravel systems, Database performance tuning, Security enhancements.",
    },
    {
        title: "PHP Developer",
        company: "Teckspark Technologies",
        period: "2016 - 2017",
        description: "Core PHP backend maintenance, MySQL schema design, Bootstrap/jQuery UI development.",
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="mb-24 scroll-mt-24">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-accent" />
                Professional Experience
            </h2>

            <div className="relative border-l border-white/10 ml-3 space-y-12">
                {/* Detailed Current Roles */}
                {currentRoles.map((role) => (
                    <div key={role.title + role.company} className="relative pl-12 group">
                        <div
                            className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full ${role.dotColor} ring-4 ring-background ${role.ringColor} transition-all`}
                        />

                        <div className="glass-card p-8 rounded-2xl hover:bg-surface-highlight/50 transition-all">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <div>
                                    <h3
                                        className={`text-xl font-bold text-white ${role.titleHoverColor} transition-colors`}
                                    >
                                        {role.title}
                                    </h3>
                                    <p className="text-slate-400">
                                        {role.company} | {role.location}
                                    </p>
                                </div>
                                <span
                                    className={`px-3 py-1 rounded-full ${role.badgeBg} ${role.badgeText} text-xs font-semibold whitespace-nowrap`}
                                >
                                    {role.period}
                                </span>
                            </div>
                            <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                                <ul className={`list-disc list-outside ml-4 space-y-2 ${role.markerColor}`}>
                                    {role.highlights.map((highlight) => (
                                        <li key={highlight.label}>
                                            <strong>{highlight.label}</strong> {highlight.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Previous Experience (Compact) */}
                <div className="relative pl-12 pt-4">
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <History className="w-5 h-5 text-slate-500" />
                        Previous Experience
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        {previousRoles.map((role) => (
                            <div
                                key={role.company}
                                className="p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="font-bold text-white text-sm">{role.title}</h4>
                                        <p className="text-xs text-slate-500">{role.company}</p>
                                    </div>
                                    <span className="text-[10px] text-slate-500">{role.period}</span>
                                </div>
                                <p className="text-xs text-slate-400">{role.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
