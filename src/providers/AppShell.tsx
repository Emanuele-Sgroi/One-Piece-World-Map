"use client";

import React, { useState, createContext } from "react";
import { ViewMapType, ViewRoutes } from "@/types/types";
import AppShellUIElementes from "@/components/AppShelll/AppShellUIElementes";

interface props {
  children: React.ReactNode;
}

export const AppShellContext = createContext({
  currentView: ViewMapType.GlobeMap,
  setCurrentView: (_: ViewMapType) => {},
  currentRoute: ViewRoutes.routesDisabled,
  setCurrentRoute: (_: ViewRoutes) => {},
  zoomIn: () => {},
  setZoomIn: (_: () => void) => {},
  zoomOut: () => {},
  setZoomOut: (_: () => void) => {},
});

const AppShellProvider = ({ children }: props) => {
  const [currentView, setCurrentView] = useState(ViewMapType.GlobeMap);
  const [currentRoute, setCurrentRoute] = useState(ViewRoutes.routesDisabled);
  const [zoomIn, setZoomIn] = useState<() => void>(() => () => {});
  const [zoomOut, setZoomOut] = useState<() => void>(() => () => {});
  const value = {
    currentView,
    setCurrentView,
    currentRoute,
    setCurrentRoute,
    zoomIn,
    setZoomIn,
    zoomOut,
    setZoomOut,
  };

  return (
    <AppShellContext.Provider value={value}>
      <AppShellUIElementes />
      {children}
    </AppShellContext.Provider>
  );
};

export default AppShellProvider;
