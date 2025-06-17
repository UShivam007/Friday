import { createBrowserRouter, RouterProvider } from 'react-router';
import Applicaion from './Applicaion';
import Home from './Home';
import Contact from './Contact';
import UIUX from './subpage/UIUX';
import Frontend from './subpage/frontend';
import Backend from './subpage/backend';
import NotFound from '../subcontent/NotFound';
import Login from './subpage/Login';
import Dashboard from './Dashboard';
import Course from './Courses';
import AboutUS from './AboutUS';



let router = createBrowserRouter
([
    {
        path: "/",
        element: <Applicaion/>,
        children:
        [
            {
                path:"/Home",
                element:<Home/>
            },
            {
                path:"/About",
                element:<AboutUS/>
            },
            {
                path: "/Courses/:coursedetails",
                element: <Course/>,
                children:[
                    {
                        path:"uiux",
                        element:<UIUX/>
                    },
                    {
                        path:"frontend",
                        element:<Frontend/>
                    },
                    {
                        path:"backend",
                        element:<Backend/>
                    }
                ]
            },
          
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path:"/Dashboard",
                element:<Dashboard/>
            },
            {
                path:"/Login",
                element:<Login/>
            },
        ]
    },
    {
        path:"*",
        element:<NotFound/>
    }
]);


const Router = () => {
    return (
        <>
        <RouterProvider router={router} />
        </>
     )
}

export default Router;
