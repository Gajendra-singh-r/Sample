"use client";
import { usePreferences } from "@/providers";
import {
  ArrowUpTrayIcon,
  Cog6ToothIcon,
  MoonIcon,
  SunIcon,
  TvIcon,
} from "@heroicons/react/24/outline";
import {
  Avatar,
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
  classNames,
} from "@rafty/ui";
import { useTheme } from "next-themes";
import Link from "next/link";

export function ProfileMenu() {
  const { shrink } = usePreferences();

  return (
    <Menu>
      <MenuTrigger size="icon" variant="ghost" className="p-1 w-full">
        {shrink ? (
          <Avatar size="sm" name="Sample" />
        ) : (
          <div className="flex gap-2 items-center w-full">
            <Avatar name="Sample" />
            <div className="text-start">
              <p className="text-sm">sample@gmail.com</p>
              <p className="text-sm text-secondary-400 dark:text-secondary-500">
                Free
              </p>
            </div>
          </div>
        )}
      </MenuTrigger>
      <MenuContent
        align="start"
        side="right"
        alignOffset={1}
        className="space-y-1 z-10"
      >
        <ThemeSelector />
        <Link href="">
          <MenuItem>
            <Cog6ToothIcon className="size-4 stroke-2" />
            Settings
          </MenuItem>
        </Link>
        <MenuSeparator />
        <MenuItem className="focus:text-red-500 focus:bg-red-200/40 dark:focus:bg-red-300/20 dark:focus:text-red-300">
          <ArrowUpTrayIcon className="size-4 stroke-2 rotate-90" />
          Sign out
        </MenuItem>
      </MenuContent>
    </Menu>
  );
}

const THEMES = {
  light: SunIcon,
  dark: MoonIcon,
  system: TvIcon,
};

function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  const ThemeTriggerIcon = THEMES[theme as keyof typeof THEMES];

  return (
    <MenuSub>
      <MenuSubTrigger className="justify-start data-[state=open]:bg-secondary-200/70 dark:data-[state=open]:bg-secondary-700/60">
        <ThemeTriggerIcon className="size-4 stroke-2" />
        Theme
        <div className="flex-1" />
      </MenuSubTrigger>
      <MenuSubContent alignOffset={-4} className="space-y-1 z-10">
        {Object.entries(THEMES).map(([name, Icon]) => (
          <MenuItem
            key={name}
            className={classNames(
              theme === name &&
                "bg-primary-50/70 focus:bg-primary-50/70 text-primary-500 dark:bg-primary-500/30 dark:focus:bg-primary-500/30 dark:text-white",
              "capitalize"
            )}
            onClick={() => setTheme(name)}
            onKeyDown={() => setTheme(name)}
          >
            <Icon className="stroke-2 size-4" />
            {name}
          </MenuItem>
        ))}
      </MenuSubContent>
    </MenuSub>
  );
}
