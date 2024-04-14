"use client";

import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./lib/store";

export default function CustomPersistGate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
}
