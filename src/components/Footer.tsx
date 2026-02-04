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
    <div className="relative bg-card text-card-foreground">
      <div className="relative z-10 py-12 md:px-24 md:py-16">
        <footer className="footer text-base-content mt-4 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <aside className="space-y-8">
            <div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-primary">Debate Club</h2>
                <p className="text-sm text-muted-foreground mt-2">Excellence through Debate</p>
              </div>
              <div className="my-6 text-center md:text-left space-y-2">
                <p className="text-sm">
                  <strong>Contact:</strong> +1 (555) 123-4567
                </p>
                <p className="text-sm">
                  <strong>Email:</strong> info@debateclub.edu
                </p>
                <p className="text-sm">
                  <strong>Location:</strong> University Campus Center
                  <br />
                  Academic Building, Room 201
                </p>
              </div>
              <div className="flex justify-center gap-3 md:justify-start">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition p-2">
                  <Link href={buccSocials.facebook} target="_blank" className="text-primary">
                    <Facebook size={20} />
                  </Link>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition p-2">
                  <Link href={buccSocials.linkedin} target="_blank" className="text-primary">
                    <Linkedin size={20} />
                  </Link>
                </div>
                <div className="flex h-9 w-9 items-center justify center rounded-full bg-primary/10 hover:bg-primary/20 transition p-2">
                  <Link href={buccSocials.instagram} target="_blank" className="text-primary">
                    <Instagram size={20} />
                  </Link>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition p-2">
                  <Link href={buccSocials.youtube} target="_blank" className="text-primary">
                    <Youtube size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {footer_menu.map((menu, index) => (
            <nav key={index} className="space-y-4 text-center md:text-right">
              <h6 className="text-lg font-bold text-foreground">{menu.title}</h6>
              {menu.childrens.map((child, idx) => (
                <Link
                  key={idx}
                  href={child.path}
                  className="block text-sm text-muted-foreground transition duration-300 hover:text-primary"
                >
                  {child.title}
                </Link>
              ))}
            </nav>
          ))}
        </footer>
      </div>
      <div className="border-t py-6 text-center">
        <aside>
          <p className="text-sm text-muted-foreground">
            &copy; Debate Club {new Date().getFullYear()} - All rights reserved | Made with passion
          </p>
        </aside>
      </div>
      {showScroll && (
        <button
          className="fixed bottom-20 right-4 z-30 rounded-full bg-primary p-2 text-primary-foreground hover:bg-primary/80 transition"
          onClick={scrollTop}
          aria-label="Scroll to top"
        >
          <ArrowUp />
        </button>
      )}
      <div className="absolute inset-0 z-0 flex items-end justify-center overflow-clip opacity-5 md:items-center">
        <h1 className="text-[45vw] font-extrabold text-foreground md:text-[55vw]">
          D
        </h1>
      </div>
    </div>
  );
};

export default Footer;
