"use client";

import React, { useState, createContext } from "react";
import { ViewMapType, ViewRoutes } from "@/types/types";

interface props {
  children: React.ReactNode;
}

const AppShellContext = createContext({
  currentView: ViewMapType.GlobeMap,
  currentRoute: ViewRoutes.routesDisabled,
});

const AppShellProvider = ({ children }: props) => {
  const [currentView, setCurrentView] = useState(ViewMapType.GlobeMap);
  const [currentRoute, setCurrentRoute] = useState(ViewRoutes.routesDisabled);

  const value = { currentView, setCurrentView, currentRoute, setCurrentRoute };

  return (
    <AppShellContext.Provider value={value}>
      {children}
    </AppShellContext.Provider>
  );
};

export default AppShellProvider;
