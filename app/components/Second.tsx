"use client";

import React, { useRef } from "react";
import { useStateContext } from "../context/state";

function Second() {
  const { current, setCurrent, setName } = useStateContext();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <main
      className={`flex items-center justify-center duration-[1s] ease-linear ${
        current === "Second" ? "scale-100 h-screen" : "scale-0 h-0"
      }`}
    >
      <div className="p-6 bg-white rounded-xl shadow-[0_10px_15px_-3px_rgba(255,255,255,0.5),0_4px_6px_-4px_rgba(255,255,255,0.5)] text-black flex flex-col gap-6 items-center">
        <h1 className="text-xl font-semibold">Masukin Nama Kamu</h1>
        <input
          ref={inputRef}
          type="text"
          className="border border-[#86b7fe] shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)] text-lg p-2 rounded-lg"
          onChange={(e) => {
            inputRef.current!.value = e.target.value;
          }}
        />
        <button
          onClick={() => {
            setName(inputRef.current!.value);
            setCurrent("Third");
          }}
          className="bg-[#0D6EFD] rounded-full py-1 px-4 text-lg text-white font-medium hover:scale-90 duration-300 ease-linear"
        >
          OK
        </button>
      </div>
    </main>
  );
}

export default Second;
