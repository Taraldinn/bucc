import ActionButtons from "./action-buttons";
import Logo from "./logo";
import NavigationBar from "./navigation-bar";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-xl bg-background/80 supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-between items-center py-4 h-[85px]">
        <Logo />
        <NavigationBar />
        <ActionButtons />
      </div>
    </div>
  );
}
