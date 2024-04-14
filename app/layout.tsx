import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./storeProvider";
import CustomPersistGate from "./persistedStoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test o complex",
  description: "Test task",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StoreProvider>
        <CustomPersistGate>
          <body>{children}</body>
        </CustomPersistGate>
      </StoreProvider>
    </html>
  );
}
