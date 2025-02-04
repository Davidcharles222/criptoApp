import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Layout from "./components/Header/Layout";

const router = createBrowserRouter([
    {
        element: <Layout />, // para meu elemento header
        children:[
            {
                path:"/",
                element: <Home />
            },
            {
                path:"/detail/:cripto",
                element: <Detail />
            },
            {
                path:"*",
                element: <NotFound />
            },
        ]
    }
])

export default router