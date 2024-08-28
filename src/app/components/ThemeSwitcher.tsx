"use client"

import { Paintbrush } from "lucide-react"
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react"
import { cn } from "../lib/utils";
// type ThemeType = {
//     light: { name: string; color: string }[];
//     dark: { name: string; color: string }[];
//   };

//   const themes: ThemeType = {
//     light: [
//       { name: "zinc", color: "bg-zinc-100" },
//       { name: "orange", color: "bg-orange-500" },
//       { name: "red", color: "bg-red-500" },
//       { name: "blue", color: "bg-blue-500" },
//       { name: "green", color: "bg-green-500" },
//     ],
//     dark: [
//       { name: "zinc", color: "bg-zinc-950" },
//       { name: "orange", color: "bg-orange-500" },
//       { name: "red", color: "bg-red-500" },
//       { name: "blue", color: "bg-blue-500" },
//       { name: "green", color: "bg-green-500" },
//     ],
//   };

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const [dropdown, setDropdown] = useState(false);

    const { themes, theme, setTheme } = useTheme();

    const dropdownRef = useRef<HTMLDivElement | null>(null);



    useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) return null
    return (
        <div className="relative">
            <button onClick={()=>setDropdown(!dropdown)}>
                <Paintbrush className="w-20 h-20 text-accent" />
            </button>
            {dropdown && (
                <div
                    ref={dropdownRef}
                    className={cn(
                        "absolute transition-all z-[60] top-auto right- w-[350px] bg-secondary border border-accent p-3 rounded-md overflow-hidden"
                    )}
                >
                    <div className="flex flex-col space-y-3">
                        <div className="w-full font-semibold">Customize Theme</div>
                        <div className="text-sm font-semibold mt-4">Mode</div>
                        <div className="grid grid-cols-3 w-full gap-3">
                            {/* <button
                className={cn(
                  "flex items-center gap-x-2 py-1 px-3 rounded-md text-sm border border-muted hover:bg-background transition",
                  mode === "light" && "border-2 border-border"
                )}
                onClick={() => handleModeChange("light")}
              >
                <Sun className="w-5 h-5 shrink-0" />
                Light
              </button>
              <button
                className={cn(
                  "flex items-center gap-x-2 py-1 px-3 rounded-md text-sm border border-muted hover:bg-background transition",
                  mode === "dark" && "border-2 border-border"
                )}
                onClick={() => handleModeChange("dark")}
              >
                <Moon className="w-5 h-5 shrink-0" />
                Dark
              </button>
            </div>
            <div className="text-sm font-semibold mt-4">Colors</div>
            <div className="grid grid-cols-3 w-full gap-3"> */}
                            {themes.map((themeOption) => (
                                <button
                                    key={themeOption}
                                    onClick={() => setTheme(themeOption)}
                                    className={
                                        "flex items-center gap-x-2 border border-muted py-1 px-2 rounded-md text-sm text-foreground hover:bg-background transition ease-in"}
                                >
                                    {themeOption}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}