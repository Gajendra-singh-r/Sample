"use client";
import { useShiki } from "@/providers";
import {
  ArrowUpTrayIcon,
  CodeBracketIcon,
  StopIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Skeleton,
  Tab,
  TabContent,
  TabList,
  TabTrigger,
} from "@rafty/ui";
import { useTheme } from "next-themes";

export function QueryOutput() {
  const highlighter = useShiki();
  const { resolvedTheme } = useTheme();

  if (!highlighter)
    return (
      <div className="h-full space-y-2 py-3">
        <Skeleton className="h-5 w-1/2 rounded" />
        <Skeleton className="h-5 w-full rounded" />
        <Skeleton className="h-5 w-full rounded" />
        <Skeleton className="h-5 w-3/4 rounded" />
        <Skeleton className="h-5 w-1/4 rounded" />
      </div>
    );

  const content = `"use client";
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
`;

  const html = highlighter.codeToHtml(content, {
    lang: "js",
    theme:
      resolvedTheme === "light"
        ? "github-light-default"
        : "github-dark-default",
  });

  return (
    <div className="h-full border-l relative border-secondary-200 dark:border-secondary-800 overflow-y-auto">
      <Tab defaultValue="preview" className="flex h-full w-full flex-col">
        <TabList>
          <TabTrigger value="preview" className="flex items-center gap-1">
            <StopIcon className="size-4 stroke-2" />
            Preview
          </TabTrigger>
          <TabTrigger value="code" className="flex items-center gap-1">
            <CodeBracketIcon className="size-4 stroke-2" />
            Code
          </TabTrigger>
        </TabList>
        <TabContent value="preview" className="p-4 flex-1 overflow-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quidem
          nulla ipsum tempore, ad, voluptatibus necessitatibus blanditiis enim
          nemo commodi temporibus nostrum dolor suscipit exercitationem
          molestias distinctio. Esse, ad explicabo.
        </TabContent>
        <TabContent
          value="code"
          className="flex-1 overflow-auto data-[orientation=horizontal]:px-0 data-[orientation=horizontal]:py-0"
        >
          <div className="p-3 bg-white h-full overflow-y-auto dark:bg-[#0d1117]">
            <div
              className="h-max min-h-full w-max min-w-full"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: Need this to show the highlighting
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </TabContent>
      </Tab>
      <Button size="icon" variant="ghost" className="absolute right-2 top-2">
        <ArrowUpTrayIcon className="size-4 stroke-2" />
      </Button>
    </div>
  );
}
