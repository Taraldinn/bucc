import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
        D
      </div>
      <span className="hidden font-bold text-xl text-primary sm:inline">
        Debate Club
      </span>
    </Link>
  );
}
