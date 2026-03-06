"use client";

import Image from "next/image";

export default function HeroSlideshow() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/hero-bg5.jpg"
        alt=""
        fill
        className="object-cover"
        style={{ animation: "kenburns 20s ease-in-out infinite alternate" }}
        priority
      />
    </div>
  );
}
