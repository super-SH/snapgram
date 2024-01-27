import React, { createContext, useContext, useState } from "react";

type IEditCommentContextProps = {
  editingCommentId: number | null;
  isEditingSession: boolean;
  setEditingCommentId: React.Dispatch<React.SetStateAction<number | null>>;
};

const EditCommentContext = createContext<IEditCommentContextProps | undefined>(
  undefined,
);

function EditCommentProvider({ children }: { children: React.ReactNode }) {
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const isEditingSession = Boolean(editingCommentId);

  return (
    <EditCommentContext.Provider
      value={{ editingCommentId, isEditingSession, setEditingCommentId }}
    >
      {children}
    </EditCommentContext.Provider>
  );
}

function useEditCommentContext() {
  const context = useContext(EditCommentContext);

  if (context === undefined)
    throw new Error("Edit Comment context is used outside of its provider");

  return context;
}

export { EditCommentProvider, useEditCommentContext };
