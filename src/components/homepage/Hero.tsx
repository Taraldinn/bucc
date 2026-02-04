"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroBanner from "/public/images/homepage/Executive Body 2025.jpeg";

export default function Hero() {
  const videoId = "UpPdA9WClQ4";

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center space-y-10 px-4 text-center md:px-6">
        <div className="max-w-4xl space-y-6">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Welcome to Excellence
          </div>
          <h1 className="text-5xl font-bold leading-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Master Debate
            </span>
            <br />
            <span className="text-foreground">Lead Tomorrow</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl lg:text-2xl leading-relaxed">
            Join a thriving community of eloquent minds. Develop critical thinking, master persuasion, and compete at the highest levels.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <Link href="/registration">
            <Button size="lg" className="w-full gap-2 sm:w-auto bg-primary hover:bg-primary/90 text-lg font-semibold px-8 h-12">
              Start Your Journey
              <span>→</span>
            </Button>
          </Link>
          <Link href="/about/about-us">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-lg font-semibold px-8 h-12 border-2 border-secondary text-secondary hover:bg-secondary/5"
            >
              Explore More
            </Button>
          </Link>
        </div>

        <div className="relative w-full max-w-6xl pt-8">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={heroBanner}
              alt="University Debate Club Members"
              className="h-auto w-full object-cover"
              width={1200}
              height={675}
              placeholder="blur"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <button
              className="absolute inset-0 flex items-center justify-center group"
              onClick={() =>
                window.open(
                  `https://www.youtube.com/watch?v=${videoId}`,
                  "_blank",
                )
              }
              aria-label="Play video"
            >
              <div className="rounded-full bg-primary p-4 text-white shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                <Play size={32} fill="currentColor" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
