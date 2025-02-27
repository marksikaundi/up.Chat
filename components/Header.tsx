"use client";
import Link from "next/link";
import React from "react";
import AgentPulse from "./AgentPulse";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="sticky top-0 z-50 left-0 right-0 px-4 md:px-0 bg-white/50 backdrop-blur-sm border-b border-gray-200  ">
      <div className=" container mx-auto ">
        <div className="flex items-center justify-between h-16 ">
          <Link className="flex items-center gap-4 " href="/">
            <AgentPulse size="small" color="blue" />
            <h1 className=" text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              up.Chat
            </h1>
          </Link>
        </div>

        <div>
          <SignedIn>
            <Link href="/manage-plan">
              <Button
                variant="outline"
                className="mr-4 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text "
              >
                Manage Plan
              </Button>
            </Link>
          </SignedIn>

          <div className="p-2 w-10 h-10 flex items-center justify-center rounded-full border bg-blue-100 border-blue-200 ">
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
