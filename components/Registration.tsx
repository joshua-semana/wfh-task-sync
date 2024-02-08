import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";

const Registration = () => {
  return (
    <div className="items-center flex flex-col gap-4">
      <Label className="text-xl font-bold">Register</Label>

      <div className="flex flex-col gap-2">
        <Label className="flex items-start">Full Name</Label>
        <Input></Input>
        <Label className="flex items-start">Email</Label>
        <Input></Input>
        <Label className="flex items-start">Phone no.</Label>
        <Input></Input>
        <Label className="flex items-start">Password</Label>
        <Input></Input>
        <Label className="flex items-start">Confirm Password</Label>
        <Input></Input>
      </div>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button className="w-24 mt-4">Register</Button>
          </TooltipTrigger>
          <TooltipContent>
            <Label className="text-xs">
              Informations above will be submitted to Manager
            </Label>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <p className="text-xs mt-2">
        Already have an account?{" "}
        <Button variant="link" className="text-xs p-0">
          Login
        </Button>
      </p>
    </div>
  );
};

export default Registration;
