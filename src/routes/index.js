import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import NotFoundPage from "./404";

const routes = [
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"*",
        element:<NotFoundPage/>
    }
]

const router = createBrowserRouter(routes);

export default router;