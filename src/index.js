import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import CrystalPage from "./pages/crystal/CrystalPage";
import BakeryPage from "./pages/bakery/BakeryPage";
import BearsPage from "./pages/bears/BearsPage";
import BicyclePage from "./pages/bicycle/BicyclePage";
import CleaningPage from "./pages/cleaning/CleaningPage";
import ElectricPage from "./pages/electric/ElectricPage";
import HandymanPage from "./pages/handyman/HandyManPage";
import LawncarePage from "./pages/lawncare/LawncarePage";
import MovingPage from "./pages/moving/MovingPage";
import PlumberPage from "./pages/plumber/PlumberPage";
import YardPage from "./pages/yard/YardPage";
import ErrorPage from "./pages/error/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/crystal",
                element: <CrystalPage />
            },
            {
                path: "/bakery",
                element: <BakeryPage />
            },
            {
                path: "/bears",
                element: <BearsPage />
            },
            {
                path: "/bicycle",
                element: <BicyclePage />
            },
            {
                path: "/cleaning",
                element: <CleaningPage />
            },
            {
                path: "/electric",
                element: <ElectricPage />
            },
            {
                path: "/handyman",
                element: <HandymanPage />
            },
            {
                path: "/lawncare",
                element: <LawncarePage />
            },
            {
                path: "/moving",
                element: <MovingPage />
            },
            {
                path: "/plumber",
                element: <PlumberPage />
            },
            {
                path: "/yard",
                element: <YardPage />
            },
        ]
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
