"use client";

import React, { useContext, useState, useEffect } from "react";

type StateContextType = {
  current: string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

const StateContext = React.createContext<StateContextType>({
  current: "",
  setCurrent: () => {},
  name: "",
  setName: () => {},
});

export const useStateContext = () => useContext(StateContext);

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [current, setCurrent] = useState("First");
  const [name, setName] = useState("");

  useEffect(() => {
    document.body.style.overflow =
      current === "First" || current === "Second" ? "hidden" : "auto";
    document.body.style.height =
      current === "First" || current === "Second" ? "100vh" : "auto";
  }, [current]);

  return (
    <StateContext.Provider
      value={{
        current,
        setCurrent,
        name,
        setName,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
