//import { useState } from 'react'
//import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import ContactUs from "./pages/ContactUs";
import Main from "./layouts/Main";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children:[
      {
        path: "/",
        element: (
          <Home />
        ),
      },
      {
        path: "/posts",
        element: (
          <Posts />
        ),
      },
      {
        path: "/contact-us",
        element: (
          <ContactUs />
        ),
      },
    ]

  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
