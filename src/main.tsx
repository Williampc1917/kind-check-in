import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

document.documentElement.setAttribute("data-theme", "amber-clean");

createRoot(document.getElementById("root")!).render(<App />);
