import type { PropsWithChildren } from "react";
import { Sidebar } from "./Sidebar";

export function Wrapper({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full">{children}</div>
    </div>
  );
}
