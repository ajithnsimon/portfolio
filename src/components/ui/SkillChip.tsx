import { cn } from "@/lib/utils";

interface SkillChipProps {
    label: string;
    className?: string;
}

export default function SkillChip({ label, className }: SkillChipProps) {
    return (
        <span className={cn("skill-chip", className)}>
            {label}
        </span>
    );
}
