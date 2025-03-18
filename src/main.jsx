import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TopRow from "./assets/TopRow";
import MiddeRow from "./assets/MiddeRow";
import BottomRow from "./assets/BottomRow";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TopRow />
    <MiddeRow />
    <BottomRow />
  </StrictMode>
);
