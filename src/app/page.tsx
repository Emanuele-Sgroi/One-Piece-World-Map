"use client";

import React, { useContext } from "react";
import Globe from "@/components/globe/Globe";
import { ViewMapType } from "@/types/types";
import { AppShellContext } from "@/providers/AppShell";

export default function Home() {
  const { currentView } = useContext(AppShellContext);

  return (
    <main className="h-screen w-full">
      {currentView === ViewMapType.GlobeMap ? (
        <Globe />
      ) : (
        <h1 className="text-red-500">World map coming soon</h1>
      )}
    </main>
  );
}
