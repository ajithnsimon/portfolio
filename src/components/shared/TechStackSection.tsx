import {
    Cpu,
    Layout,
    Server,
    Database,
    Bot,
    Cloud,
    ShieldCheck,
    Wrench,
    Users,
} from "lucide-react";

const skillCategories = [
    {
        title: "Frontend",
        icon: Layout,
        iconColor: "text-blue-400",
        hoverBorder: "hover:border-blue-500/30",
        hoverShadow: "hover:shadow-blue-500/10",
        glowColor: "bg-blue-500/10 group-hover:bg-blue-500/20",
        skills: [
            "React.js", "Next.js", "Vue.js", "JavaScript (ES6+)", "TypeScript",
            "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "jQuery",
            "Responsive UI", "Redux", "Redux Toolkit", "React Hook Form",
            "Vuex", "Webpack", "Vite",
        ],
    },
    {
        title: "Backend",
        icon: Server,
        iconColor: "text-green-400",
        hoverBorder: "hover:border-green-500/30",
        hoverShadow: "hover:shadow-green-500/10",
        glowColor: "bg-green-500/10 group-hover:bg-green-500/20",
        skills: [
            "PHP", "Laravel", "Node.js", "Express.js", "Python",
            "REST API Development", "JWT/OAuth", "Cron Jobs", "Socket IO",
            "Payment Integrations", "BullMQ", "RabbitMQ", "Kafka",
        ],
    },
    {
        title: "Database",
        icon: Database,
        iconColor: "text-yellow-400",
        hoverBorder: "hover:border-yellow-500/30",
        hoverShadow: "hover:shadow-yellow-500/10",
        glowColor: "bg-yellow-500/10 group-hover:bg-yellow-500/20",
        skills: [
            "MySQL", "PostgreSQL", "MongoDB", "Redis", "Schema Design",
            "Query Optimization", "Indexing", "Caching & Sessions",
        ],
    },
    {
        title: "AI & Automation",
        icon: Bot,
        iconColor: "text-purple-400",
        hoverBorder: "hover:border-purple-500/30",
        hoverShadow: "hover:shadow-purple-500/10",
        glowColor: "bg-purple-500/10 group-hover:bg-purple-500/20",
        skills: [
            "Vertex AI", "Document AI", "Apache Airflow",
            "Web Scraping (Python)", "Typesense", "OCR Processing",
        ],
    },
    {
        title: "DevOps & Cloud",
        icon: Cloud,
        iconColor: "text-cyan-400",
        hoverBorder: "hover:border-cyan-500/30",
        hoverShadow: "hover:shadow-cyan-500/10",
        glowColor: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
        skills: [
            "GCP", "Docker", "Jenkins", "Vercel", "Laravel Forge",
            "Nginx", "Linux Server", "CI/CD Pipelines",
            "Automated Deployments", "Doppler",
        ],
    },
    {
        title: "Testing",
        icon: ShieldCheck,
        iconColor: "text-red-400",
        hoverBorder: "hover:border-red-500/30",
        hoverShadow: "hover:shadow-red-500/10",
        glowColor: "bg-red-500/10 group-hover:bg-red-500/20",
        skills: [
            "PHPUnit", "Jest", "Unit Testing", "Integration Testing", "API Testing",
        ],
    },
    {
        title: "Tools",
        icon: Wrench,
        iconColor: "text-slate-400",
        hoverBorder: "hover:border-slate-400/30",
        hoverShadow: "hover:shadow-slate-500/10",
        glowColor: "bg-slate-500/10 group-hover:bg-slate-500/20",
        skills: [
            "Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Trello",
            "Slack", "Swagger/OpenAPI", "Figma", "Postman",
        ],
    },
];

const leadershipSkills = {
    leadership: [
        "Team Leadership", "Technical Ownership", "Team Mentoring",
        "Code Reviews", "Technical Guidance", "Conflict Resolution",
        "Developer Onboarding", "Cross-Functional Collaboration",
    ],
    management: [
        "Agile Scrum", "Sprint Planning", "Requirement Analysis",
        "Project Roadmapping", "Milestone Planning", "Release Management",
        "Risk Assessment", "Delivery Management",
    ],
};

export default function TechStackSection() {
    return (
        <section id="skills" className="mb-32 scroll-mt-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl font-bold text-white flex items-center gap-3 mb-2">
                        <Cpu className="w-8 h-8 text-secondary" />
                        Technical Ecosystem
                    </h2>
                    <p className="text-slate-400">
                        The arsenal of tools and technologies I use to build scalable systems.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                        <div
                            key={category.title}
                            className={`glass-card p-6 rounded-2xl border border-white/5 ${category.hoverBorder} transition-all duration-500 group hover:shadow-2xl ${category.hoverShadow} hover:-translate-y-1 relative overflow-hidden`}
                        >
                            <div
                                className={`absolute top-0 right-0 w-32 h-32 ${category.glowColor} rounded-full blur-3xl -z-10 transition-all duration-500`}
                            />
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <Icon className={`w-5 h-5 ${category.iconColor}`} />
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="skill-chip">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}

                {/* Leadership Card (Spans 2 columns on lg) */}
                <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-500 group hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1 relative overflow-hidden lg:col-span-2">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10 group-hover:bg-accent/20 transition-all duration-500" />
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <Users className="w-5 h-5 text-accent" />
                        Leadership &amp; Management
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                                Leadership
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {leadershipSkills.leadership.map((skill) => (
                                    <span key={skill} className="skill-chip border-accent/20 text-accent/90">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                                Project Management
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {leadershipSkills.management.map((skill) => (
                                    <span key={skill} className="skill-chip border-primary/20 text-primary/90">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
