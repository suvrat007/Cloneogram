import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MainScreen from "./Components/MainScreen";
import Profile from "./Components/Profile";
import Posts from "./Components/Posts";
import OptionsTab from "./Components/OptionsTab";
import Body from "./Components/Body";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body/>,
        children: [{
            path: "/",
            element: <MainScreen/>
            }
            ,{
                path: "profile",
                element: <Profile />,
            },
            {
                path: "posts",
                element: <Posts />,
            },
        ],
    },
]);

function App() {
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
}

export default App;
