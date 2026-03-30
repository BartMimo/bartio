import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold tracking-wide uppercase",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0" />
      {children}
    </span>
  );
}
