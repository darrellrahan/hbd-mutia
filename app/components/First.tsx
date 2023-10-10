"use client";

import { Heart } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { useStateContext } from "../context/state";

function First() {
  const { current, setCurrent } = useStateContext();

  return (
    <main
      className={`flex items-center justify-center duration-[1s] ease-linear ${
        current === "First" ? "opacity-100 h-screen" : "opacity-0 h-0"
      }`}
    >
      <div className="flex flex-col gap-8 items-center">
        <button
          onClick={() => setCurrent("Second")}
          className="bg-pink-300 w-56 h-32 flex justify-center items-end p-4 hover:scale-90 duration-300 ease-linear"
        >
          <Heart size={64} weight="fill" className="text-red-600" />
        </button>
        <h3 className="text-xl">Klik Pesannya!</h3>
      </div>
    </main>
  );
}

export default First;
