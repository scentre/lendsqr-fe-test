import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/main.scss";
import DashboardState from "./components/DashboardContext.tsx";
import { Modals } from "./components/Modal.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <DashboardState>
        <Modals>
          <App />
        </Modals>
      </DashboardState>
    </BrowserRouter>
  </React.StrictMode>
);
