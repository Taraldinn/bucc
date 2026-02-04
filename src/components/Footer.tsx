"use client";

import { buccSocials } from "@/constants/buccInfo";
import {
  ArrowUp,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { menus } from "./navbar/menus";
import BUCCLogo from "/public/assets/bucc-logo.svg";

const navbar_menus_paths = menus
  .map((menu) => {
    if (menu.childrens) {
      return menu.childrens.map((child) => child.path);
    }
    return menu.path;
  })
  .flat(1);

const footer_menu = [
  {
    title: "Quick Links",
    childrens: [
      { title: "About Us", path: "/about" },
      { title: "Events", path: "/events" },
      { title: "Gallery", path: "/gallery" },
      { title: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Publications",
    childrens: [
      { title: "Press Releases", path: "/press-releases" },
      { title: "Blogs", path: "/blogs" },
      { title: "Newsletters", path: "/newsletters" },
      { title: "Magazine", path: "/magazine" },
    ],
  },
  {
    title: "Legal",
    childrens: [
      { title: "Terms of Use", path: "/tou" },
      { title: "Privacy Policy", path: "/about/privacy-policy" },
      { title: "Cookie Policy", path: "/cookie-policy" },
    ],
  },
];

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!navbar_menus_paths.includes(path)) {
    return (
      <div className="border-t py-4 dark:border-border">
        <div className="container flex flex-col items-center justify-between gap-2 pb-3 md:flex-row">
          <div className="text-sm text-muted-foreground">
            <Link href="/" className="text-primary font-semibold">
              &copy; Debate Club
            </Link>{" "}
            {new Date().getFullYear()} - All rights reserved
          </div>
          <div className="text-sm text-muted-foreground">
            Made with passion by{" "}
            <a
              href="/about/web-team"
              className="text-primary font-semibold"
            >
              Our Web Team
            </a>
          </div>
          <div className="hidden md:block space-x-4">
            <Link
              href="/about/privacy-policy"
              className="text-sm text-muted-foreground hover:text-primary transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/about/terms-of-service"
              className="text-sm text-muted-foreground hover:text-primary transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="relative z-10 border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="py-16 md:py-24">
          <div className="container">
            <footer className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
              <aside className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-white font-bold">
                      D
                    </div>
                    <div>
                      <h2 className="font-bold text-sm leading-none bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Debate
                      </h2>
                      <p className="text-xs text-muted-foreground">Club</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Excellence through debate and community
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-foreground">Contact</p>
                  <p className="text-xs text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-xs text-muted-foreground">info@debateclub.edu</p>
                </div>
                <div className="flex gap-3 pt-2">
                  <Link href={buccSocials.facebook} target="_blank" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 text-primary hover:from-primary hover:to-secondary hover:text-white transition-all">
                    <Facebook size={16} />
                  </Link>
                  <Link href={buccSocials.instagram} target="_blank" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 text-primary hover:from-primary hover:to-secondary hover:text-white transition-all">
                    <Instagram size={16} />
                  </Link>
                  <Link href={buccSocials.linkedin} target="_blank" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 text-primary hover:from-primary hover:to-secondary hover:text-white transition-all">
                    <Linkedin size={16} />
                  </Link>
                  <Link href={buccSocials.youtube} target="_blank" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 text-primary hover:from-primary hover:to-secondary hover:text-white transition-all">
                    <Youtube size={16} />
                  </Link>
                </div>
              </aside>

              {footer_menu.map((menu, index) => (
                <nav key={index} className="space-y-4">
                  <h6 className="font-bold text-sm text-foreground">{menu.title}</h6>
                  <ul className="space-y-2">
                    {menu.childrens.map((child, idx) => (
                      <li key={idx}>
                        <Link
                          href={child.path}
                          className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </footer>
          </div>
        </div>

        <div className="border-t border-border/50 py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row text-center md:text-left">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Debate Club. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Crafted with excellence
            </p>
          </div>
        </div>
      </div>

      {showScroll && (
        <button
          className="fixed bottom-8 right-8 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          onClick={scrollTop}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Footer;
