import React from "react";
import ReactDOM from "react-dom/client";
import { Main, Author, HomePage, Poem } from "./components";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
} from 'react-router-dom';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={ <Main/> }>
            <Route index element={<HomePage />}/>
            <Route path='/:id' element={<Author/>}/>
            <Route path='/:id' element={<Poem />} />
        </Route>
    )
);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router} />)