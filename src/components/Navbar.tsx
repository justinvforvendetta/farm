import { useEffect, useRef, useState } from "react";
import { ChevronDown, Sprout } from "lucide-react";

type FarmItem = {
  label: string;
  path: string;
  disabled?: boolean;
};

type NavbarProps = {
  currentPath: string;
  onNavigate: (path: string) => void;
  farmItems: FarmItem[];
};

export function Navbar({ currentPath, onNavigate, farmItems }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("mousedown", handlePointerDown);
    return () => window.removeEventListener("mousedown", handlePointerDown);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/65 px-4 py-3 shadow-[0_20px_80px_rgba(2,6,23,0.45)] backdrop-blur-xl sm:px-6">
        <button
          type="button"
          onClick={() => onNavigate("/")}
          className="flex items-center gap-3 text-left"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-400/10 text-emerald-200">
            <Sprout className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-xs font-semibold uppercase tracking-[0.32em] text-slate-300/70">
              XVG
            </span>
            <span className="block text-lg font-semibold tracking-tight text-white">
              Multi-Chain Farms
            </span>
          </span>
        </button>

        <nav className="flex items-center gap-3 text-sm text-slate-100">
          <button
            type="button"
            onClick={() => onNavigate("/")}
            className={`rounded-full px-4 py-2 transition ${
              currentPath === "/"
                ? "bg-white/12 text-white"
                : "text-slate-300 hover:bg-white/8 hover:text-white"
            }`}
          >
            Home
          </button>
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 transition ${
                currentPath.startsWith("/farm/")
                  ? "bg-white/12 text-white"
                  : "text-slate-300 hover:bg-white/8 hover:text-white"
              }`}
            >
              Tokens
              <ChevronDown
                className={`h-4 w-4 transition ${menuOpen ? "rotate-180" : ""}`}
              />
            </button>
            {menuOpen ? (
              <div className="absolute right-0 top-[calc(100%+0.75rem)] min-w-[12rem] rounded-3xl border border-white/10 bg-slate-950/92 p-2 shadow-[0_24px_90px_rgba(15,23,42,0.55)] backdrop-blur-xl">
                {farmItems.map((farmItem) => {
                  const active = currentPath === farmItem.path;

                  return (
                    <button
                      key={farmItem.path}
                      type="button"
                      onClick={() => {
                        if (farmItem.disabled) {
                          return;
                        }

                        setMenuOpen(false);
                        onNavigate(farmItem.path);
                      }}
                      disabled={farmItem.disabled}
                      className={`w-full rounded-2xl px-4 py-3 text-left text-sm uppercase tracking-[0.18em] transition ${
                        farmItem.disabled
                          ? "cursor-not-allowed text-slate-500"
                          : ""
                      } ${
                        active
                          ? "bg-emerald-400/14 text-white"
                          : "text-slate-200 hover:bg-white/8 hover:text-white"
                      }`}
                    >
                      {farmItem.label}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        </nav>
      </div>
    </header>
  );
}
