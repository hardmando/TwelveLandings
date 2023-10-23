import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/main/MainPage";
import { createBrowserRouter ,BrowserRouter, Routes, Route } from "react-router-dom";
import CrystalPage from "./pages/crystal/CrystalPage";
import ErrorPage from "./pages/error/ErrorPage";

function App() {
    <MainPage/>
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/crystal",
        element: <CrystalPage />,
    },

]);
export default App;
