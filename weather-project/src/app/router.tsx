import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { HomePage } from "@/pages/home";
import { WeatherPage } from "@/pages/weather";
import { FavoritesPage } from "@/pages/favorites";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/weather/:location",
        element: <WeatherPage/>,
      },
      {
        path: "/favorites",
        element: <FavoritesPage/>,
      },
    ],
  },
]);