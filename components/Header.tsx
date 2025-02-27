"use client";
import Link from "next/link";
import React from "react";
import AgentPulse from "./AgentPulse";

function Header() {
  return (
    <header className="sticky top-0 z-50 left-0 ring-0  ">
      <div>
        <div>
          <div>
            <Link className="flex items-center gap-4 " href="/">
              <AgentPulse size="small" color="blue" />
              <h1 className=" text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                up.Chat
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
