import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/theme-provider.tsx";
import UIProvider from "./contexts/ui-provider.tsx";
import { ExpandedProvider } from "./contexts/expand-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <UIProvider>
        <ExpandedProvider>
          <App />
        </ExpandedProvider>
      </UIProvider>
    </ThemeProvider>
  </StrictMode>
);
