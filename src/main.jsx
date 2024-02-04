import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./context/AuthContext";
import { DataProvider } from "./context/DataContext";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <Toaster />
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>
);
