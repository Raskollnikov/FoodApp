import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import MainContent from "./components/MainContent.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Cart from "./components/Cart.jsx";
//  added Last!
import Millionaires from "./components/Millionaires.jsx";
// Chunking
// Code Splitting
// Lazy Loading
// Dynamic bundling
// On Demand Loading

const Grocery = lazy(() => import("./components/Grocery.jsx"));
// const RestaurantMenu = lazy(() => import("./components/RestaurantMenu.jsx"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
      // Added Last
      {
        path: "/millionaires",
        element: <Millionaires />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/groceries",
        element: (
          <Suspense fallback={<h1>Hello Fallback</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
