export interface NavItem {
    href: string;
    icon: string;
    label: string;
}

export interface Project {
    title: string;
    description: string;
    category: string;
    icon: string;
    iconColor: string;
    tags: string[];
}

export interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    current?: boolean;
    highlights: string[];
}

export interface PreviousRole {
    title: string;
    company: string;
    period: string;
    description: string;
}

export interface Education {
    degree: string;
    institution: string;
    location: string;
    period: string;
    borderColor: string;
}

export interface SkillCategory {
    title: string;
    icon: string;
    iconColor: string;
    hoverBorderColor: string;
    hoverShadowColor: string;
    glowColor: string;
    skills: string[];
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}
