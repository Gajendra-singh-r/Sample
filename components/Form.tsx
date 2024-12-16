"use client";
import { useFormState } from "@/providers";
import { chatValidation as schema } from "@/validations";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@rafty/ui";
import { nanoid } from "nanoid";
import { useParams, useRouter } from "next/navigation";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import type z from "zod";

export function Form() {
  const { id: queryId } = useParams();

  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  const { addItem, updateItem } = useFormState();

  const router = useRouter();

  const { handleSubmit, register, control, reset } = methods;

  const { content } = useWatch({ control });

  const isDisabled = content == null || content.trim() === "";

  const id = nanoid();

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(({ content }) => {
          if (queryId) updateItem(String(queryId), content);
          else {
            addItem(id, content);

            router.push(id);
          }

          reset();
        }, console.error)}
        className="w-full flex-col flex gap-2 rounded-xl border border-secondary-300 dark:border-secondary-700 bg-transparent p-2"
      >
        <div className="px-2">
          <textarea
            {...register("content")}
            // biome-ignore lint/a11y/noAutofocus: <explanation>
            autoFocus
            placeholder="Add your comment..."
            className="block w-full max-h-[25dvh] outline-none resize-none border-0 bg-transparent focus:ring-0 placeholder:text-secondary-400 dark:placeholder:text-secondary-500 px-2 py-1.5"
          />
        </div>
        <Button
          size="icon"
          variant="outline"
          className="ml-auto mt-2"
          isDisabled={isDisabled}
          type="submit"
        >
          <ArrowUpIcon className="size-4 stroke-[3]" />
        </Button>
      </form>
    </FormProvider>
  );
}
