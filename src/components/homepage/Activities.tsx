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
    <div className="group relative flex gap-3 overflow-hidden bg-muted/30 p-6">
      <div className="animate-loop-scroll flex gap-8 space-x-16 whitespace-nowrap group-hover:paused">
        {activities.concat(activities).map((activity, index) => (
          <div key={index} className="flex items-center space-x-8">
            <p className="text-5xl font-bold text-primary md:text-7xl">{activity}</p>
            <Image src={star} alt="star" width={64} height={64} />
          </div>
        ))}
      </div>
    </div>
  );
}
