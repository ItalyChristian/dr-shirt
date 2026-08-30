"use client";

import { Theme } from "@radix-ui/themes";

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: Readonly<AppProvidersProps>) {
  return <Theme appearance="dark">{children}</Theme>;
}
