import React from "react";
import Controllers from "./Controllers";
import ZoomControls from "./ZoomControls";

const AppShellUIElementes = () => {
  return (
    <div className="w-full h-screen absolute p-8">
      <ZoomControls />
      <Controllers />
    </div>
  );
};

export default AppShellUIElementes;
