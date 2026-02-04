"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroBanner from "/public/images/homepage/Executive Body 2025.jpeg";

export default function Hero() {
  const videoId = "UpPdA9WClQ4";

  return (
    <section className="w-full py-12 lg:py-20">
      <div className="container flex flex-col items-center justify-center space-y-8 px-4 text-center md:px-6">
        <div className="max-w-4xl space-y-4">
          <h1 className="text-4xl font-bold text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            University Debate Club
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            A thriving community of eloquent minds united by the art of argumentation. Develop critical thinking, master persuasion, and compete at the highest levels of debate.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/registration">
            <Button size="lg" className="w-full sm:w-auto">
              Join Our Team
            </Button>
          </Link>
          <Link href="/about/about-us">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Learn More
            </Button>
          </Link>
        </div>
        <div className="relative w-full max-w-5xl overflow-hidden rounded-lg">
          <div className="relative">
            <Image
              src={heroBanner}
              alt="University Debate Club Members"
              className="h-auto w-full rounded-lg object-cover"
              width={1200}
              height={675}
              placeholder="blur"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <button
                className="rounded-full bg-primary/40 p-4 text-primary-foreground backdrop-blur-sm"
                onClick={() =>
                  window.open(
                    `https://www.youtube.com/watch?v=${videoId}`,
                    "_blank",
                  )
                }
                aria-label="Play video"
              >
                <Play size={60} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
