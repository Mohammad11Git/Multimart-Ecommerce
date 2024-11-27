import {createBrowserRouter ,} from "react-router-dom";
import { lazy } from "react";
import App from "../App";

const ProductId = lazy(() =>import("../Page/ProductId"));
const Home = lazy(() => import( "../Page/Home"));
const Shop = lazy(() =>import("../Page/Shop"));
const Cart = lazy(() => import("../Page/Cart"))
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/shop',
                element:<Shop/>
            },
            {
                path:'/shop/:id',
                element:<ProductId/>

            },
            {
                path:'/cart',
                element:<Cart/>
            }

        ]
    }
])
export default router;

