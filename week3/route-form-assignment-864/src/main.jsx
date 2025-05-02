import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //import these modules
import './index.css'
import NotFoundPage from "./pages/NotFoundPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx"
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import FavoriteDetailPage from "./pages/FavoriteDetailPage.jsx";

const router = createBrowserRouter([
  {
    path: "/", // Home route
    element: <HomePage />, // Render the App component
  },
  {
    path: "/login", // Home route
    element: <LoginPage />, // Render the App component
  },
  {
    path: "/signup", // Home route
    element: <SignUpPage />, // Render the App component
  },
  {
    path: "/favorite", // Home route
    element: <FavoritesPage />, // Render the App component
  },
  {
    path: "/favorite/:id", // Home route
    element: <FavoriteDetailPage />, // Render the App component
  },
  {
    path: "*", // Fallback route for all unmatched paths
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Provide the router to the app */}
  </StrictMode>
);