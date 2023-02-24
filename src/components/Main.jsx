import React , { useState, useEffect } from "react";
import { Navbar } from "./";
import { getPoem } from "../API-adapter";

const Main = () => {

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
    const response = await getPoem();

    setAuthors(response.authors)

}

    return(
        <div id="main">
            <Navbar />
            <form>
                <label>Search For Author:</label>
                <input type='text' onInput={(event) => {
                        setSearch(event.target.value);
                }}/>
            </form>
            {
                search.length ? filtered.map((author, idx) => {
                    return(<p key={`this author is at index: ${idx}`}>{author}</p>)
                }) : authors.map((author, idx) => {
                    return(<p key={`this author is at index: ${idx}`}>{author}</p>)
                })

}
        </div>
    )
}

export default Main