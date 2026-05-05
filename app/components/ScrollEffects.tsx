"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const nav = document.getElementById("site-nav");

    const updateNav = () => {
      const shouldStaySolid = nav?.dataset.solid === "true";
      nav?.classList.toggle("scrolled", shouldStaySolid || window.scrollY > 60);
    };

    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", updateNav);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
