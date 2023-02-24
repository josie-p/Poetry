import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getAuthorDetails } from '../API-adapter';

const Author = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);

    const authorDetailsMain = async () => {
        let response = await getAuthorDetails(id);
        setDetails(response);
        console.log(response, 'from Authors');
    }

    useEffect(() => {
        authorDetailsMain();
    }, []);

    return(
        <div>
            <h1>{id}</h1>
            {
                details.map((detail, idx) => {
                    return(
                        <div key={`the key for this is ${idx}`}>
                            <p>Line Count: {detail.linecount}</p>
                            <p>Title: {detail.title}</p>
                            <Link to={`/${detail.title}`}><button>See Poem</button></Link>
                        </div>
                    )
                })
            }

            <div>
                
            </div>
        </div>
    )
}

export default Author;