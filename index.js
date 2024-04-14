import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

// JSX => Babel transpiles it to React.createElement => ReactElement JS Object => HTMLElement(render)
// React Element
const heading = (
  <h1 className="heading" tabIndex="5">
    Heading with jsx
  </h1>
);
// render method is responsible for creating h1 tag out of the heading object
root.render(heading);
