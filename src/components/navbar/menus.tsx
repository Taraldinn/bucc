const menus = [
  { title: "Home", path: "/" },
  {
    title: "About",
    path: "/about",
    childrens: [
      {
        title: "About Us",
        path: "/",
      },
      { title: "Team Members", path: "/members" },
      { title: "Leadership", path: "/executive-body" },
      { title: "Coaches & Mentors", path: "/advisors" },
      { title: "Our History", path: "/history" },
    ],
  },
  { title: "Competitions", path: "/events" },
  {
    title: "Resources",
    path: "/publications",
    childrens: [
      { title: "News & Updates", path: "/press-releases" },
      { title: "Blog", path: "/blogs" },
      { title: "Debate Tips", path: "/newsletters" },
      { title: "Archives", path: "/magazine" },
    ],
  },
  { title: "Gallery", path: "/gallery" },
  { title: "Contact", path: "/contact" },
];

export { menus };
