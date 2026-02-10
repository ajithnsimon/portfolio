import { GraduationCap, MapPin, Calendar } from "lucide-react";

const educationItems = [
    {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Bharathiar University",
        location: "Coimbatore, India",
        period: "04/2020 – 01/2022",
        borderColor: "border-l-secondary",
        accentColor: "text-secondary",
        glowColor: "bg-secondary/10",
    },
    {
        degree: "Computer Engineering (Diploma)",
        institution: "Government Polytechnic College",
        location: "Kunnamkulam, Thrissur",
        period: "04/2013 – 01/2016",
        borderColor: "border-l-primary",
        accentColor: "text-primary",
        glowColor: "bg-primary/10",
    },
];

export default function EducationSection() {
    return (
        <section id="education" className="mb-24 scroll-mt-24">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-secondary" />
                Education
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
                {educationItems.map((item) => (
                    <div
                        key={item.degree}
                        className={`glass-card p-6 rounded-xl border-l-4 ${item.borderColor} relative overflow-hidden group`}
                    >
                        <div
                            className={`absolute right-0 top-0 w-24 h-24 ${item.glowColor} rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110`}
                        />
                        <h3 className="text-lg font-bold text-white">{item.degree}</h3>
                        <p className={`${item.accentColor} font-medium text-sm mb-2`}>
                            {item.institution}
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-xs mb-2">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                            <span className="mx-1">•</span>
                            <Calendar className="w-3 h-3" />
                            {item.period}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
