"use client";

import React, { useState, createContext } from "react";
import { ViewMapType, ViewRoutes } from "@/types/types";
import AppShellUIElementes from "@/components/AppShelll/AppShellUIElementes";

interface props {
  children: React.ReactNode;
}

export const AppShellContext = createContext({
  currentView: ViewMapType.GlobeMap,
  currentRoute: ViewRoutes.routesDisabled,
});

const AppShellProvider = ({ children }: props) => {
  const [currentView, setCurrentView] = useState(ViewMapType.GlobeMap);
  const [currentRoute, setCurrentRoute] = useState(ViewRoutes.routesDisabled);

  const value = { currentView, setCurrentView, currentRoute, setCurrentRoute };

  return (
    <AppShellContext.Provider value={value}>
      <AppShellUIElementes />
      {children}
    </AppShellContext.Provider>
  );
};

export default AppShellProvider;
