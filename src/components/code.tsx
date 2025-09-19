import { cn } from "@/lib/utils";

interface CodeProps {
  children: React.ReactNode;
  className?: string;
  language?: string;
}

export function Code({ children, className, language }: CodeProps) {
  return (
    <pre className={cn("overflow-x-auto rounded-lg bg-muted p-4 my-6", className)}>
      <code className={cn("text-sm font-mono", language && `language-${language}`)}>
        {children}
      </code>
    </pre>
  );
}
