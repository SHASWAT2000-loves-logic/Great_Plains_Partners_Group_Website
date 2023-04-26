// This component creates the button at the bottom right that when clicked takes the user to the top of the page

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "instant",
      //   behavior: "smooth",
    });
  }, [pathname]);

  return null;
}
