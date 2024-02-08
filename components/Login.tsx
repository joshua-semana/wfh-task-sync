import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  return (
    <div className="items-center flex flex-col gap-4">
      <Label className="text-xl font-bold">Login</Label>

      <div className="flex flex-col gap-2">
        <Label className="flex items-start">Username</Label>
        <Input></Input>
        <Label className="flex items-start">Password</Label>
        <Input></Input>
        <div className="flex justify-end">
          <Button variant="link" className="text-xs">
            Forgot password?
          </Button>
        </div>
      </div>

      <Button className="w-24">Login</Button>
      <Label className="text-xs ">
        Don't have an account?{" "}
        <Button variant="link" className="text-xs p-0">
          Register
        </Button>
      </Label>
    </div>
  );
};

export default Login;
