import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function JoinCTA() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="group relative overflow-hidden rounded-2xl border border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-secondary/10 transition-all duration-500" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 rounded-2xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm p-12 md:p-16 lg:flex-row lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="mb-4 text-4xl md:text-5xl font-bold">
                <span className="text-foreground">Ready to Join the</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Debate Revolution?
                </span>
              </h2>
              <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Take the first step towards mastering debate, developing critical thinking, and joining a community of exceptional speakers and thinkers.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/registration">
                <Button size="lg" className="gap-2 px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Started
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
