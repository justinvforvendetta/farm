import { useEffect, useState } from "react";
import { FarmDashboard } from "@/components/FarmDashboard";
import { LandingPage } from "@/components/LandingPage";
import { Navbar } from "@/components/Navbar";

const HOME_ROUTE = "/";
const XVGBASE_FARM_ROUTE = "/farm/xvgbase";

function normalizePath(pathname: string) {
  if (pathname === XVGBASE_FARM_ROUTE || pathname === HOME_ROUTE) {
    return pathname;
  }

  return HOME_ROUTE;
}

export default function App() {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    function syncViewport() {
      const viewportHeight = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--app-height", `${viewportHeight}px`);
      window.dispatchEvent(new Event("resize"));
    }

    function handleVisibilityChange() {
      if (document.visibilityState === "visible") {
        window.setTimeout(syncViewport, 50);
      }
    }

    function handlePopState() {
      setPathname(normalizePath(window.location.pathname));
    }

    syncViewport();
    window.addEventListener("pageshow", syncViewport);
    window.addEventListener("orientationchange", syncViewport);
    window.addEventListener("resize", syncViewport);
    window.addEventListener("popstate", handlePopState);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("pageshow", syncViewport);
      window.removeEventListener("orientationchange", syncViewport);
      window.removeEventListener("resize", syncViewport);
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  function navigate(nextPath: string) {
    const normalized = normalizePath(nextPath);
    if (normalized === pathname) {
      return;
    }

    window.history.pushState({}, "", normalized);
    setPathname(normalized);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const isFarmPage = pathname === XVGBASE_FARM_ROUTE;

  return (
    <>
      <Navbar
        currentPath={pathname}
        onNavigate={navigate}
        farmItems={[
          { label: "XVGBASE", path: XVGBASE_FARM_ROUTE },
          { label: "XVGBSC", path: "/farm/xvgbsc", disabled: true },
        ]}
      />
      {isFarmPage ? (
        <FarmDashboard />
      ) : (
        <LandingPage onNavigateToFarm={() => navigate(XVGBASE_FARM_ROUTE)} />
      )}
    </>
  );
}
