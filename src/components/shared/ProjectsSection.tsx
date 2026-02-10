import {
    Layers,
    Scale,
    Globe,
    PoundSterling,
    Car,
    BarChart2,
    Utensils,
    GraduationCap,
    Heart,
    Camera,
    ShoppingCart,
    CheckSquare,
    TrendingUp,
} from "lucide-react";

const projects = [
    {
        title: "Court Click",
        description: "Real-time court case tracking system automating cause list retrieval and alerts for lawyers across Kerala.",
        category: "Legal Tech",
        icon: Scale,
        iconBg: "bg-primary/10",
        iconColor: "text-primary",
        iconHoverBg: "group-hover:bg-primary",
        tags: ["Laravel", "Kafka", "Redis"],
    },
    {
        title: "OneView",
        description: "Automated company formation and compliance monitoring platform for UAE businesses with zero-failure design.",
        category: "FinTech / Gov",
        icon: Globe,
        iconBg: "bg-accent/10",
        iconColor: "text-accent",
        iconHoverBg: "group-hover:bg-accent",
        tags: ["Flutter", "Laravel", "AWS"],
    },
    {
        title: "Wealth Platform",
        description: "Secure centralized asset management dashboard for high-net-worth individuals and family offices in the UK.",
        category: "Wealth Tech",
        icon: PoundSterling,
        iconBg: "bg-secondary/10",
        iconColor: "text-secondary",
        iconHoverBg: "group-hover:bg-secondary",
        tags: ["MERN Stack", "MongoDB"],
    },
    {
        title: "Diamond Lease",
        description: "Full-scale vehicle rental system for Al Habtoor Group (Dubai) with fleet management and real-time booking engine.",
        category: "Automotive",
        icon: Car,
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-500",
        iconHoverBg: "group-hover:bg-blue-500",
        tags: ["MERN", "Flutter"],
    },
    {
        title: "Salesfokuz",
        description: "Industry-specific Sales CRM streamlining operations with web dashboards and mobile apps for field executives.",
        category: "CRM",
        icon: BarChart2,
        iconBg: "bg-orange-500/10",
        iconColor: "text-orange-500",
        iconHoverBg: "group-hover:bg-orange-500",
        tags: ["Laravel", "MySQL", "REST API"],
    },
    {
        title: "Kingaro",
        description: "India's first online catering marketplace for bulk food ordering, connecting corporates with top vendors.",
        category: "Marketplace",
        icon: Utensils,
        iconBg: "bg-yellow-600/10",
        iconColor: "text-yellow-600",
        iconHoverBg: "group-hover:bg-yellow-600",
        tags: ["Marketplace Logic", "Geo-location"],
    },
    {
        title: "My Pathshala",
        description: "Competitive exam prep platform with structured courses, live classes, and automated test series.",
        category: "EdTech",
        icon: GraduationCap,
        iconBg: "bg-indigo-500/10",
        iconColor: "text-indigo-500",
        iconHoverBg: "group-hover:bg-indigo-500",
        tags: ["Live Streaming", "EdTech"],
    },
    {
        title: "Coupled.in",
        description: "Modern matchmaking platform using personality traits and compatibility scores for serious relationships.",
        category: "Matrimony",
        icon: Heart,
        iconBg: "bg-pink-500/10",
        iconColor: "text-pink-500",
        iconHoverBg: "group-hover:bg-pink-500",
        tags: ["AI Matching", "Laravel"],
    },
    {
        title: "MinitOe",
        description: "Media-centric platform for capturing, storing, and sharing photos with secure access controls.",
        category: "Media Tech",
        icon: Camera,
        iconBg: "bg-purple-500/10",
        iconColor: "text-purple-500",
        iconHoverBg: "group-hover:bg-purple-500",
        tags: ["Laravel", "Flutter"],
    },
    {
        title: "Cloudeme",
        description: "Comprehensive POS and ERP solutions for retail, restaurants, and service industries with inventory management.",
        category: "Retail Tech",
        icon: ShoppingCart,
        iconBg: "bg-teal-500/10",
        iconColor: "text-teal-500",
        iconHoverBg: "group-hover:bg-teal-500",
        tags: ["ERP", "POS", "Inventory"],
    },
    {
        title: "Untask",
        description: "Collaborative SaaS for centralized task management, meeting minutes, and internal team communication.",
        category: "SaaS",
        icon: CheckSquare,
        iconBg: "bg-pink-500/10",
        iconColor: "text-pink-500",
        iconHoverBg: "group-hover:bg-pink-500",
        tags: ["Laravel", "Next.js"],
    },
    {
        title: "PEG",
        description: "Prediction exchange platform allowing users to trade on future event outcomes with secure financial logic.",
        category: "Trading",
        icon: TrendingUp,
        iconBg: "bg-yellow-500/10",
        iconColor: "text-yellow-500",
        iconHoverBg: "group-hover:bg-yellow-500",
        tags: ["Laravel", "Next.js"],
    },
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="mb-24 scroll-mt-24">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Layers className="w-8 h-8 text-primary" />
                Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => {
                    const Icon = project.icon;
                    return (
                        <div
                            key={project.title}
                            className="glass-card p-6 rounded-xl hover:bg-surface-highlight/50 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div
                                    className={`p-3 ${project.iconBg} rounded-lg ${project.iconColor} ${project.iconHoverBg} group-hover:text-white transition-colors`}
                                >
                                    <Icon className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    {project.category}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4 h-16 line-clamp-3">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 text-[10px] rounded bg-white/5 text-slate-400 border border-white/5"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
