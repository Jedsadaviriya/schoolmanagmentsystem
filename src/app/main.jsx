import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router"
import App from "./App.jsx"
import "./index.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <div>titel</div>,
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
        <RouterProvider router={router} />
)
