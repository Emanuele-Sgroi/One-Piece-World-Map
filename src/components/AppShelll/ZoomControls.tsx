import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { AppShellContext } from "@/providers/AppShell";

const ZoomControls = () => {
  const { zoomIn, zoomOut } = useContext(AppShellContext);
  return (
    <div className="absolute top-8 left-10 z-[999999]">
      <div className="flex flex-col gap-px">
        <Button
          variant="secondary"
          className="w-10 h-10 rounded-none border-none text-2xl font-bold"
          onClick={zoomIn}
        >
          +
        </Button>
        <Button
          variant="secondary"
          className="w-10 h-10 rounded-none border-none text-2xl font-bold"
          onClick={zoomOut}
        >
          -
        </Button>
      </div>
    </div>
  );
};

export default ZoomControls;
