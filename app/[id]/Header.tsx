import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { Button } from "@rafty/ui";
import React from "react";

export function Header() {
  return (
    <div className="flex justify-between p-3 items-center w-full">
      <h3 className="text-sm">Onboarding screen</h3>
      <Button size="icon" variant="ghost">
        <EllipsisHorizontalIcon className="size-5 stroke-2" />
      </Button>
    </div>
  );
}
