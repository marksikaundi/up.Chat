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
            <Link className="flex items-center  " href="/">
              <AgentPulse size="small" color="blue" />
              <h1>up.Chat</h1>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
