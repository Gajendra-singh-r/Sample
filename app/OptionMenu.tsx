"use client";
import { useFormState } from "@/providers";
import {
  EllipsisHorizontalIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  classNames,
  eventHandler,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@rafty/ui";
import { useParams, useRouter } from "next/navigation";

export type OptionMenu = {
  itemIndex: number;
  isActive: boolean;
  setActiveItem: (index?: number) => void;
};

export function OptionMenu({ itemIndex, isActive, setActiveItem }: OptionMenu) {
  const { id } = useParams();
  const router = useRouter();

  const { deleteItem } = useFormState();

  const handleDeleteQuery = eventHandler(() => {
    deleteItem(String(id));
    router.push("/");
  });

  return (
    <Menu onOpenChange={(open) => setActiveItem(open ? itemIndex : undefined)}>
      <MenuTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className={classNames(
            "absolute right-0 -top-1 group-hover:visible invisible transition-all ease-in-out",
            isActive && "visible"
          )}
        >
          <EllipsisHorizontalIcon className="size-4 stroke-[3]" />
        </Button>
      </MenuTrigger>
      <MenuContent side="right" align="start">
        <MenuItem>
          <PencilIcon className="size-4 stroke-2" />
          Rename
        </MenuItem>
        <MenuItem
          className="text-red-500 dark:text-red-400"
          onClick={handleDeleteQuery}
          onKeyDown={handleDeleteQuery}
        >
          <TrashIcon className="size-4 stroke-2" />
          Delete
        </MenuItem>
      </MenuContent>
    </Menu>
  );
}
