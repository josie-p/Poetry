import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAuthorDetails } from '../API-adapter';

const Author = () => {
    const { id } = useParams();
    const [details, setDetails] = useState('');

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
            <h1>hello from Author</h1>
            <div>
                
            </div>
        </div>
    )
}

export default Author;