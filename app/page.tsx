import { Form } from "@/components";

export default function HomePage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center max-w-3xl gap-6 mx-auto">
      <h1 className="text-5xl font-semibold">What can I help you ship?</h1>
      <Form />
    </div>
  );
}
