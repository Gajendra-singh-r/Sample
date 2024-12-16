"use client";
import { useFormState } from "@/providers";
import { useParams } from "next/navigation";
import { Header } from "./Header";
import { Form } from "@/components";
import { Avatar } from "@rafty/ui";

export function QueryDisplay() {
  const { id: queryId } = useParams();
  const { formValue } = useFormState();

  const content = formValue.find(({ id }) => id === String(queryId))?.content;

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <Header />
      <div className="px-14 py-4 flex flex-col flex-1 h-full overflow-y-auto gap-4">
        <div className="flex items-center gap-2">
          <Avatar size="sm" name="sm" />
          <p className="text-sm">On boarding screen</p>
        </div>
        <div
          className="overflow-y-auto [&::-webkit-scrollbar]:w-[3px]
            [&::-webkit-scrollbar-thumb]:bg-secondary-400 dark:[&::-webkit-scrollbar-thumb]:bg-secondary-700 [&::-webkit-scrollbar-thumb]:rounded-md h-full whitespace-pre-wrap flex-1 text-secondary-800 dark:text-secondary-300"
        >
          {content}
        </div>
        <Form />
      </div>
    </div>
  );
}
