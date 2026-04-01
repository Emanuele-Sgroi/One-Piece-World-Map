import React, { useState } from "react";
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

const Controllers = () => {
  const [controllerTab, setControllerTab] = useState("map");
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
              className={`text-center flex-1 font-medium pb-2 border-b-[3px] transition-all ease-in-out ${controllerTab === "map" ? "text-blue-600" : "cursor-pointer hover:text-blue-600 border-transparent"}`}
            >
              Map
            </button>
            <button
              onClick={() => setControllerTab("route")}
              className={`text-center flex-1 font-medium pb-2 border-b-[3px] transition-all ease-in-out ${controllerTab === "route" ? "text-blue-600" : "cursor-pointer hover:text-blue-600 border-transparent"}`}
            >
              Route
            </button>
          </div>
          <div className="w-full flex">
            <div className="flex-1">
              {controllerTab === "map" && (
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">Option One</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">Option Two</Label>
                  </div>
                </RadioGroup>
              )}
            </div>

            <div className="flex-1">
              {controllerTab === "route" && (
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">Option One</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">Option Two</Label>
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
