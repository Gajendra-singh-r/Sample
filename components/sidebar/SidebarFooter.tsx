import { usePreferences } from "@/providers";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  eventHandler,
} from "@rafty/ui";
import { ProfileMenu } from "./ProfileMenu";

export function SidebarFooter() {
  const { shrink, setShrink } = usePreferences();

  const onShrink = eventHandler(() => setShrink(false));

  return (
    <div className="space-y-4">
      {shrink && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={onShrink}
              onKeyDown={onShrink}
            >
              <ChevronRightIcon className="size-[18px] stroke-2" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Open sidebar</TooltipContent>
        </Tooltip>
      )}
      <ProfileMenu />
    </div>
  );
}
