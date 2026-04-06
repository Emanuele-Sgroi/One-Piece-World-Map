import React, { useState, useContext } from "react";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AppShellContext } from "@/providers/AppShell";
import { ViewMapType, ViewRoutes } from "@/types/types";

const Controllers = () => {
  const [controllerTab, setControllerTab] = useState("map");
  const { currentView, setCurrentView, currentRoute, setCurrentRoute } =
    useContext(AppShellContext);

  return (
    <div className="absolute top-8 right-10 z-[999999]">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="default" size="lg" className="">
            Controller
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle className="border-b border-b-gray-200 pb-2 font-medium">
              Switch View & Routes
            </PopoverTitle>
          </PopoverHeader>
          <div className="w-full flex justify-between items-center">
            <button
              onClick={() => setControllerTab("map")}
              className={`text-center flex-1 font-medium pb-2 border-b-[3px] transition-all ease-in-out mx-4 ${controllerTab === "map" ? "text-blue-600" : "cursor-pointer hover:text-blue-600 border-transparent"}`}
            >
              Map
            </button>
            <button
              onClick={() => setControllerTab("route")}
              className={`text-center flex-1 font-medium pb-2 border-b-[3px] transition-all ease-in-out mx-4 ${controllerTab === "route" ? "text-blue-600" : "cursor-pointer hover:text-blue-600 border-transparent"}`}
            >
              Route
            </button>
          </div>
          <div className="w-full flex p-2">
            <div className="flex-1">
              {controllerTab === "map" && (
                <RadioGroup
                  value={currentView.toString()}
                  onValueChange={(val) => setCurrentView(Number(val))}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <RadioGroupItem
                      value={ViewMapType.GlobeMap.toString()}
                      id={`map_${ViewMapType.GlobeMap.toString()}`}
                    />
                    <Label htmlFor={`map_${ViewMapType.GlobeMap.toString()}`}>
                      Globe
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      value={ViewMapType.FlatMap.toString()}
                      id={`map_${ViewMapType.FlatMap.toString()}`}
                    />
                    <Label htmlFor={`map_${ViewMapType.FlatMap.toString()}`}>
                      World Map
                    </Label>
                  </div>
                </RadioGroup>
              )}
            </div>

            <div className="flex-1">
              {controllerTab === "route" && (
                <RadioGroup
                  value={currentRoute.toString()}
                  onValueChange={(val) => setCurrentRoute(Number(val))}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <RadioGroupItem
                      value={ViewRoutes.routesDisabled.toString()}
                      id={`route_${ViewRoutes.routesDisabled.toString()}`}
                    />
                    <Label
                      htmlFor={`route_${ViewRoutes.routesDisabled.toString()}`}
                    >
                      Disabled
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      value={ViewRoutes.strawHatRoute.toString()}
                      id={`route_${ViewRoutes.strawHatRoute.toString()}`}
                    />
                    <Label
                      htmlFor={`route_${ViewRoutes.strawHatRoute.toString()}`}
                    >
                      Straw Hat Crew
                    </Label>
                  </div>
                </RadioGroup>
              )}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Controllers;
