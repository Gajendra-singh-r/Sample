"use client";
import { usePreferences } from "@/providers";
import { classNames } from "@rafty/ui";
import { type HTMLAttributes, type ReactNode, forwardRef } from "react";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarFooter } from "./SidebarFooter";

export type Sidebar = HTMLAttributes<HTMLDivElement>;
export const Sidebar = forwardRef<HTMLDivElement, Sidebar>(function Sidebar(
  { children, className, ...props },
  forwardedRef
) {
  const { shrink } = usePreferences();

  return (
    <div
      {...props}
      className={classNames(
        "h-full border-r border-secondary-200 dark:border-secondary-800 dark:bg-secondary-950",
        shrink ? "w-max" : "w-[260px]",
        className
      )}
      ref={forwardedRef}
    >
      <aside className="py-2 pl-2 flex flex-col items-start gap-4 h-full">
        <div className="pr-2 w-full">
          <SidebarHeader />
        </div>
        <nav className="flex-grow flex flex-col items-center justify-start w-full gap-1 overflow-x-hidden overflow-y-auto pr-2">
          {children}
        </nav>
        <div className="pr-2 w-full">
          <SidebarFooter />
        </div>
      </aside>
    </div>
  );
});
