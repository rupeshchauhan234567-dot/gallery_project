import { createRoot } from "react-dom/client";
import { ReactLenis } from "lenis/react";

import "lenis/dist/lenis.css";
import "./index.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <ReactLenis
    root
    options={{
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.08,
      smoothTouch: false,
      syncTouch: false,
      overscroll: true,
      stopInertiaOnNavigate: true,
    }}
  >
    <App />
  </ReactLenis>
);

