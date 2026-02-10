export const SITE_CONFIG = {
    name: "Ajith NS",
    title: "Ajith NS | Engineering Lead & Architect",
    description:
        "Portfolio of Ajith NS - Engineering Lead and Senior Full Stack Developer with 9+ years of experience building scalable applications.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    email: "asollur@gmail.com",
    github: "https://github.com/ajithnsimon",
    linkedin: "https://linkedin.com/in/ajith-simon",
} as const;

export const NAV_ITEMS = [
    { href: "#", icon: "Home", label: "Home" },
    { href: "#about", icon: "User", label: "About" },
    { href: "#skills", icon: "Code2", label: "Tech Stack" },
    { href: "#projects", icon: "Layers", label: "Projects" },
    { href: "#experience", icon: "Briefcase", label: "History" },
    { href: "#education", icon: "GraduationCap", label: "Education" },
] as const;
