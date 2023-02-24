import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPoem } from '../API-adapter';

const Poem = () => {

    const [poem, setPoem] = useState([]);
    const { id } = useParams();

    const getPoemFromAPI = async () => {
        const response = await getPoem(id);
        setPoem(response);
        console.log(poem, 'from Poem');
    }

    useEffect(() => {
        getPoemFromAPI();
    }, [])

    return(
        <div>Hi Poem!!</div>
    )
}

export default Poem;