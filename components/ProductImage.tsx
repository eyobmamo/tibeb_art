"use client";
import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

// Shows a warm gradient if the image URL fails, so the layout never breaks.
export default function ProductImage({ src, alt, priority, sizes = "(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw", className = "" }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`absolute inset-0 bg-[radial-gradient(60%_50%_at_30%_35%,#C6A46A,transparent_60%),radial-gradient(50%_60%_at_75%_70%,#1d4e5a,transparent_65%),#242321] ${className}`}
      />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
