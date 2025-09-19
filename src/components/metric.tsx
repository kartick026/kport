import { cn } from "@/lib/utils";

interface MetricProps {
  label: string;
  value: string;
  className?: string;
}

export function Metric({ label, value, className }: MetricProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
      <span className="text-lg font-semibold text-foreground">{value}</span>
    </div>
  );
}
