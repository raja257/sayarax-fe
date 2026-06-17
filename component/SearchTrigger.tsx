"use client";

import React, { useState } from "react";
import { Cpu, Search } from "lucide-react";
import VoiceAI from "./VoiceAI";

export default function SearchTrigger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-2 bg-slate-800 rounded-md px-3 py-2 w-full max-w-md">
        {/* Search Icon */}
        <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search cars, brands..."
          className="bg-transparent outline-none flex-1 text-sm text-white placeholder:text-slate-400"
        />

        {/* AI Voice Icon */}
        <button
          onClick={() => setOpen(true)}
          className="ml-2 relative p-2 bg-slate-600 hover:bg-slate-500 transition rounded-md flex items-center gap-1"
          title="AI Voice Search"
        >
          🎤
          <Cpu className="w-4 h-4 text-blue-400" />
        </button>
      </div>

      {/* AI Voice Modal */}
      {open && <VoiceAI onClose={() => setOpen(false)} />}
    </>
  );
}
