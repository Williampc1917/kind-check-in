import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const THEMES = [
  { value: "sage", label: "Sage" },
  { value: "sunset", label: "Sunset" },
  { value: "coral", label: "Coral" },
  { value: "amber", label: "Amber" },
  { value: "amber-clean", label: "Amber Clean" },
  { value: "honey", label: "Honey" },
  { value: "citrine", label: "Citrine" },
  { value: "champagne", label: "Champagne" },
  { value: "midnight", label: "Midnight" },
] as const;

type ThemeValue = (typeof THEMES)[number]["value"];

const STORAGE_KEY = "dev-theme";
const DEFAULT_THEME: ThemeValue = "sage";

const getInitialTheme = (): ThemeValue => {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && THEMES.some((theme) => theme.value === stored)) {
    return stored as ThemeValue;
  }
  return DEFAULT_THEME;
};

type ThemeSwitcherProps = {
  className?: string;
};

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const isDev = import.meta.env.DEV;
  const [theme, setTheme] = useState<ThemeValue>(getInitialTheme);

  useEffect(() => {
    if (!isDev) {
      return;
    }
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [isDev, theme]);

  if (!isDev) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full border border-border bg-background/80 px-2 py-1 text-xs shadow-sm backdrop-blur",
        className,
      )}
    >
      <span className="text-muted-foreground">Dev theme</span>
      <Select value={theme} onValueChange={(value) => setTheme(value as ThemeValue)}>
        <SelectTrigger className="h-7 w-[172px] rounded-full text-xs">
          <SelectValue />
        </SelectTrigger>
        <SelectContent align="end">
          {THEMES.map((themeOption) => (
            <SelectItem key={themeOption.value} value={themeOption.value}>
              {themeOption.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ThemeSwitcher;
