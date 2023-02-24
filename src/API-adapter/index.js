//base url
const BASE = 'https://poetrydb.org'

export const getAuthors = async () => {
    try{
    const response = await fetch(`${BASE}/author`);
    const result = await response.json();
    return result;
    }catch(error){
        console.error(error)
    }
}

export const getAuthorDetails = async (authorName) => {
    try{
    const response = await fetch(`${BASE}/author/${authorName}/author,title,linecount.json`);
    const result = await response.json();

    return result;
    }catch(error){
        console.error(error);
    }
}