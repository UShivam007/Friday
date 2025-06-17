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
import Wrapper from './subpage/Wrapper';
import Application from './Applicaion';
import Register from './subpage/Register';



let router = createBrowserRouter
([
    {
        path: "/",
        element: <Application />,
        children:
        [
            {
                path:"/home",
                element:<Home/>
            },
            {
                path:"/about",
                element:<AboutUS/>
            },
            {
                path: "/courses/:coursedetails",
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
                path: "/contact",
                element: <Contact />
            },
            {
                path:"/dashboard",
                element:<Dashboard/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/wrapper",
                element:<Wrapper />  
            },
            {
                path:"/register",
                element:<Register />
            }
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
