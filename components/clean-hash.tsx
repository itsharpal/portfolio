"use client";

import { useEffect } from "react";

// After a fragment link has done its scrolling, drop the fragment from the URL.
//
// Without this, clicking `work` leaves the address bar at /#work, and a refresh
// lands the reader halfway down the page. Removing it afterwards keeps both
// behaviours: a shared /#work link still scrolls on arrival, and a refresh
// starts at the top.
export function CleanHash() {
  useEffect(() => {
    const strip = () => {
      if (!window.location.hash) return;

      const clear = () => {
        // replaceState does not scroll or reload — it only rewrites the URL.
        history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      };

      // Wait for the scroll to finish so the fragment is still in place while
      // the browser is using it. scrollend is not in every browser yet, so the
      // timeout is the fallback rather than the primary path.
      let done = false;
      const once = () => {
        if (done) return;
        done = true;
        window.removeEventListener("scrollend", once);
        window.clearTimeout(timer);
        clear();
      };

      const timer = window.setTimeout(once, 1200);
      window.addEventListener("scrollend", once, { once: true });
    };

    strip();
    window.addEventListener("hashchange", strip);
    return () => window.removeEventListener("hashchange", strip);
  }, []);

  return null;
}
