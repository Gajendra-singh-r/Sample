"use client";
import { usePreferences } from "@/providers";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  eventHandler,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@rafty/ui";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "@/public/logo.png";
import Link from "next/link";

export function SidebarHeader() {
  const { shrink, setShrink } = usePreferences();
  const router = useRouter();

  const onShrink = eventHandler(() => setShrink(true));

  const handleNewChat = eventHandler(() => router.push("/"));

  return (
    <div className="flex items-center justify-between gap-2">
      <Link href="/">
        <Image
          alt="logo"
          width={500}
          height={500}
          src={Logo}
          className="size-8 rounded"
        />
      </Link>
      {!shrink && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={onShrink}
              onKeyDown={onShrink}
            >
              <ChevronLeftIcon className="size-[18px] stroke-2" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Close sidebar</TooltipContent>
        </Tooltip>
      )}
      {/* {!shrink && (
        <>
          <div className="flex-1" />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <MagnifyingGlassIcon className="size-5 stroke-2" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Search chats</TooltipContent>
          </Tooltip>
        </>
      )}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNewChat}
            onKeyDown={handleNewChat}
          >
            <PencilSquareIcon className="size-5 stroke-2" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>New chat</TooltipContent>
      </Tooltip> */}
    </div>
  );
}
