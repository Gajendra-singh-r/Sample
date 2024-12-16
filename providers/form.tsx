"use client";
import {
  type PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

type FormStateManagerContextType = ReturnType<
  typeof useFormStateManagerWatcher
>;

const FormStateContext = createContext<FormStateManagerContextType | null>(
  null
);

export const FormStateProvider = (props: PropsWithChildren) => {
  const values = useFormStateManagerWatcher();

  return (
    <FormStateContext.Provider value={values}>
      {props.children}
    </FormStateContext.Provider>
  );
};

export type FormValueType = {
  id: string;
  content: string;
}[];

function useFormStateManagerWatcher() {
  const [formValue, setFormValue] = useState<FormValueType>([]);

  const addItem = (id: string, content: string) => {
    setFormValue((prev) => [{ id, content }, ...prev]);
  };

  const deleteItem = (id: string) => {
    setFormValue((prev) => prev.filter((item) => item.id !== id));
  };

  const updateItem = (id: string, newContent: string) => {
    setFormValue((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, content: newContent } : item
      )
    );
  };

  return {
    formValue,
    addItem,
    deleteItem,
    updateItem,
  };
}

export const useFormState = () => {
  const context = useContext(FormStateContext);

  if (!context)
    throw new Error("Missing FormStateContext.Provider in the tree!");

  return context;
};
