import { useContext } from "react";
import { BedroomContext } from "@/contexts/BedroomContext";

export const useBedroom = () => useContext(BedroomContext);
