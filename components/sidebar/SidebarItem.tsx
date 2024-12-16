import { classNames } from "@rafty/ui";
import Link from "next/link";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";

export type SidebarItem = ComponentPropsWithoutRef<typeof Link> & {
  isActive?: boolean;
};

export const SidebarItem = forwardRef<ElementRef<typeof Link>, SidebarItem>(
  function SidebarItem(
    { className, href, isActive = false, ...props },
    forwardedRef
  ) {
    return (
      <Link
        href={href}
        role="button"
        tabIndex={0}
        className={classNames(
          "rounded-md group transition-all ease-in-out flex items-center p-2 gap-2 w-full",
          isActive
            ? "bg-secondary-200/80 text-secondary-800 dark:bg-secondary-800 dark:text-white"
            : "text-secondary-600 hover:text-black hover:bg-secondary-200/80 dark:text-secondary-400 dark:hover:text-secondary-100 dark:hover:bg-secondary-800",
          className
        )}
        {...props}
        ref={forwardedRef}
      />
    );
  }
);
