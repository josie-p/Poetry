import React , { useState, useEffect } from "react";
import { Link, Outlet } from 'react-router-dom'
import { Navbar } from "./";
import { getAuthors } from "../API-adapter";

const Main = () => {
    return(
        <div id="main">
            <Navbar />
            <Outlet />
            </div>
    )
}

export default Main