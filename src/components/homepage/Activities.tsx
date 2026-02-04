import Image from "next/image";
import star from "/public/assets/star.png";

const activities = [
  "Debate Tournaments",
  "Public Speaking",
  "Research Workshop",
  "Mock Debates",
  "Rhetoric Seminars",
  "Leadership Training",
  "Social Events",
  "Debate Tournaments",
  "Public Speaking",
  "Research Workshop",
  "Mock Debates",
  "Rhetoric Seminars",
  "Leadership Training",
  "Social Events",
  "Debate Tournaments",
  "Public Speaking",
  "Research Workshop",
  "Mock Debates",
  "Rhetoric Seminars",
  "Leadership Training",
  "Social Events",
  "Debate Tournaments",
  "Public Speaking",
  "Research Workshop",
  "Mock Debates",
  "Rhetoric Seminars",
  "Leadership Training",
  "Social Events",
];

export default function Activities() {
  return (
    <div className="group relative flex gap-3 overflow-hidden bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 py-12 px-4">
      <div className="animate-loop-scroll flex gap-12 space-x-20 whitespace-nowrap group-hover:paused">
        {activities.concat(activities).map((activity, index) => (
          <div key={index} className="flex items-center gap-6 shrink-0">
            <p className="text-4xl font-black md:text-6xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {activity}
            </p>
            <div className="flex-shrink-0">
              <Image src={star} alt="decoration" width={48} height={48} className="opacity-60" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
