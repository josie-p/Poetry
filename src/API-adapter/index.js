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

export const getPoem = async (title) => {
    try{
        const response = await fetch(`${BASE}/title/${title}/author,title,linecount,line.json`);
        const result = await response.json();
        return result;
    }catch(error){
        console.error(error)
    }
}