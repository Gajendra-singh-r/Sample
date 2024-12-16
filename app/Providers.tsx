"use client";
import {
  FormStateProvider,
  PreferencesProvider,
  ShikiProvider,
} from "@/providers";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem
      defaultTheme="system"
      disableTransitionOnChange
    >
      <PreferencesProvider>
        <FormStateProvider>
          <ShikiProvider>{children}</ShikiProvider>
        </FormStateProvider>
      </PreferencesProvider>
    </ThemeProvider>
  );
}
