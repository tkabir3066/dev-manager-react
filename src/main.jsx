import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.min.css";
import { ContactProvider } from "./context/Contact.Context";
import { AuthProvider } from "./context/Auth.Context";
import { BrowserRouter } from "react-router-dom";

//== Dev Manager ==//
// CRUD
// Form Handling
// Remote API server connection and handling
// Routing
// Context API
// Authentication (Registration, Login,Logout)
// Advance login - forgot password, password reset, email sending
// image upload, pagination
// Search functionality
// Securely identify the user(Authorization)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ContactProvider>
          <App />
        </ContactProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
