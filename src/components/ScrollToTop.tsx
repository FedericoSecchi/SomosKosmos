import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "@/utils/scroll";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPath = useRef(pathname);

  useEffect(() => {
    // If there's a hash, scroll to that section
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
      return;
    }

    // Only scroll to top if the route actually changed
    if (prevPath.current !== pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      prevPath.current = pathname;
    }
  }, [pathname, hash]);

  return null;
}

