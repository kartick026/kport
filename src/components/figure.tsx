import Image from "next/image";
import { cn } from "@/lib/utils";

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  width?: number;
  height?: number;
}

export function Figure({ 
  src, 
  alt, 
  caption, 
  className,
  width = 800,
  height = 400
}: FigureProps) {
  return (
    <figure className={cn("my-8", className)}>
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-muted-foreground text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
