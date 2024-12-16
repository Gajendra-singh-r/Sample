"use client";
import { useBoolean } from "@rafty/ui";
import { type PropsWithChildren, createContext, useContext } from "react";

type PreferencesManagerContextType = ReturnType<
  typeof usePreferencesManagerWatcher
>;

const PreferencesContext = createContext<PreferencesManagerContextType | null>(
  null
);

export const PreferencesProvider = (props: PropsWithChildren) => {
  const values = usePreferencesManagerWatcher();

  return (
    <PreferencesContext.Provider value={values}>
      {props.children}
    </PreferencesContext.Provider>
  );
};

function usePreferencesManagerWatcher() {
  const [shrink, setShrink] = useBoolean(false);

  return { shrink, setShrink };
}

export const usePreferences = () => {
  const context = useContext(PreferencesContext);

  if (!context)
    throw new Error("Missing PreferencesContext.Provider in the tree!");

  return context;
};
