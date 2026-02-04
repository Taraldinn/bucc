import { Award, Users, Brain, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Critical Thinking",
    description: "Develop advanced analytical and reasoning skills through rigorous debate training."
  },
  {
    icon: Users,
    title: "Community",
    description: "Join a thriving community of passionate debaters and public speakers."
  },
  {
    icon: Zap,
    title: "Competitions",
    description: "Compete at regional and national levels with expert mentorship and support."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Achieve recognition and build your portfolio with prestigious achievements."
  },
];

export default function Features() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-secondary/8 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Join <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Our Club</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the benefits of being part of a premier debate community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-xl border border-border/30 bg-gradient-to-br from-card/50 to-card/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-transparent to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-300" />
                
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
