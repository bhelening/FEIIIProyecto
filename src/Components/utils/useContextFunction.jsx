import { useContext } from "react";
import { ContextGlobal } from "./global.context";

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};
