import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground font-bold text-sm shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
        <span>D</span>
      </div>
      <div className="hidden sm:flex flex-col">
        <span className="font-bold text-sm leading-none bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Debate
        </span>
        <span className="text-xs font-semibold text-muted-foreground">
          Club
        </span>
      </div>
    </Link>
  );
}
