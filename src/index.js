import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import News from "./News";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <News />
  </StrictMode>
);
