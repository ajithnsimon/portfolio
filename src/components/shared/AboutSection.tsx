import { User } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="mb-24">
            <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />

                <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                    <User className="w-6 h-6 text-accent" />
                    Professional Summary
                </h2>

                <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                    <p>
                        Engineering Lead &amp; Senior Full Stack Developer with{" "}
                        <strong className="text-white">9+ years of experience</strong>{" "}
                        building and delivering scalable applications using Laravel, PHP,
                        Node.js, React.js, Next.js, and Vue.js.
                    </p>
                    <p>
                        Proven track record in optimizing system performance, improving API
                        efficiency, and architecting reliable backend systems using MySQL,
                        PostgreSQL, MongoDB, Redis, Kafka, RabbitMQ, and BullMQ.
                    </p>
                    <p>
                        Strong in{" "}
                        <strong className="text-white">CI/CD automation</strong>, cloud
                        deployments (GCP, Docker, Jenkins, Vercel), and leading
                        high-performing teams. Known for delivering production-ready
                        solutions, enhancing engineering standards, and driving Agile
                        delivery across cross-functional teams.
                    </p>
                </div>
            </div>
        </section>
    );
}
