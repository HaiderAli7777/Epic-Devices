import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";

const el = document.getElementById("root");
createRoot(el).render(React.createElement(App));

/* the boot splash is removed once React has actually painted, not on a timer */
requestAnimationFrame(() => {
  const boot = document.getElementById("boot");
  if (boot) { boot.style.opacity = "0"; setTimeout(() => boot.remove(), 260); }
});
