"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ExternalImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  fill?: boolean;
}

export default function ExternalImage({
  src,
  alt,
  className = "",
  priority = false,
  width = 1200,
  height = 800,
  fill = false,
}: ExternalImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (error) {
    return (
      <div className="relative w-full h-full bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        className={`
          object-cover w-full h-full
          duration-700 ease-in-out
          ${isLoading ? "opacity-0 scale-110" : "opacity-100 scale-100"}
          ${className}
        `}
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        quality={85}
        unoptimized={true} // Disable optimization for external images
        onError={() => {
          console.error("Image failed to load:", src);
          setError(true);
          setIsLoading(false);
        }}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
