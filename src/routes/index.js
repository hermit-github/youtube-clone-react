import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import NotFoundPage from "./404";
import WatchPage from "./WatchPage";

const routes = [
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/watch",
        element:<WatchPage/>
    },
    {
        path:"*",
        element:<NotFoundPage/>
    }
]

const router = createBrowserRouter(routes);

export default router;