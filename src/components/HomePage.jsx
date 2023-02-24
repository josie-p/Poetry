import React , { useState, useEffect } from "react";
import { Link, Outlet } from 'react-router-dom'
import { Navbar } from "./";
import { getAuthors } from "../API-adapter";

const HomePage = () => {

    const [authors, setAuthors] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
      let test =  getPoemInMain();
    }, [])

    useEffect(() => {
       const holdFiltered =  authors.filter((author) => (author).toLowerCase().includes(search.toLowerCase()));
       setFiltered(holdFiltered);
    }, [search])

async function getPoemInMain(){
    const response = await getAuthors();

    setAuthors(response.authors)

}

    return(
        <div id="main">
            <form>
                <label>Search For Author:</label>
                <input type='text' onInput={(event) => {
                        setSearch(event.target.value);
                }}/>
            </form>
            {
                search.length ? filtered.map((author, idx) => {
                    return(<div key={`this author is at index: ${idx}`}><Link to={`/${author}`}>{author}</Link></div>)
                }) : authors.map((author, idx) => {
                    return(<div key={`this author is at index: ${idx}`}><Link to={`/${author}`}>{author}</Link></div>)
                })
}
        </div>
    )
}

export default HomePage;