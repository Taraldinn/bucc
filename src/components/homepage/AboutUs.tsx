import Image from "next/image";
import aboutUsImage from "/public/images/homepage/bucc-about-us.jpg";

export default function AboutUs() {
  return (
    <section className="w-full px-4 py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="inline-block rounded-full bg-secondary/10 px-4 py-2 text-sm font-bold text-secondary">
                ABOUT US
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-foreground">Master the Art of</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Argumentation
                </span>
              </h2>
            </div>
            
            <div className="space-y-5">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                The University Debate Club is a thriving community of passionate debaters, public speakers, and critical thinkers dedicated to advancing the art of argumentation.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-primary/5 border border-primary/10 p-4">
                  <h3 className="font-bold text-primary mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">Develop persuasive skills and compete at the highest levels</p>
                </div>
                <div className="rounded-lg bg-secondary/5 border border-secondary/10 p-4">
                  <h3 className="font-bold text-secondary mb-2">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">Lead tomorrow's leaders through rigorous discourse</p>
                </div>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Whether you&apos;re a seasoned competitor or just beginning, our club provides resources, mentorship, and community you need to excel.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full overflow-hidden rounded-2xl aspect-square md:aspect-auto md:h-[500px] shadow-2xl group">
              <Image
                src={aboutUsImage}
                placeholder="blur"
                width="550"
                height="550"
                alt="Debate Club Community"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <p className="text-2xl md:text-3xl font-bold text-white">
                  Excellence through Community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
