"use client";
import { Sidebar as SharedSidebar, SidebarItem } from "@/components";
import { useFormState, usePreferences } from "@/providers";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button, eventHandler } from "@rafty/ui";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { OptionMenu } from "./OptionMenu";

export function Sidebar() {
  const [activeItem, setActiveItem] = useState<number | undefined>();
  const { id: queryId } = useParams();
  const { formValue } = useFormState();
  const { shrink } = usePreferences();
  const router = useRouter();

  const handleNewChat = eventHandler(() => router.push("/"));

  return (
    <SharedSidebar>
      {shrink ? (
        <Button
          size="icon"
          variant="outline"
          onClick={handleNewChat}
          onKeyDown={handleNewChat}
        >
          <PlusIcon className="size-5 stroke-2" />
        </Button>
      ) : (
        <Button
          variant="outline"
          className="w-full"
          onClick={handleNewChat}
          onKeyDown={handleNewChat}
        >
          New Chat
        </Button>
      )}
      {!shrink && formValue.length > 0 && (
        <>
          <hr className="w-full my-3 border-secondary-200 dark:border-secondary-800" />
          <p className="dark:text-secondary-500 text-start w-full text-sm mb-1.5">
            Recent chats
          </p>
        </>
      )}
      {!shrink &&
        formValue.map(({ id }, i) => {
          const isActive = activeItem === i || queryId === id;

          return (
            <SidebarItem
              href={`/${id}`}
              key={`${i}-${"item"}`}
              isActive={isActive}
            >
              <div className="relative w-full">
                <p className="group-hover:mr-6 overflow-hidden transition-all ease-in-out text-sm whitespace-nowrap">
                  {id}
                </p>
                <OptionMenu
                  itemIndex={i}
                  isActive={isActive}
                  setActiveItem={setActiveItem}
                />
              </div>
            </SidebarItem>
          );
        })}
    </SharedSidebar>
  );
}
