const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const ENGINE_ID = process.env.REACT_APP_GOOGLE_ENGINE_ID;
export const searchData = async (term) => {
    const data = await fetch(
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ENGINE_ID}&q=${term}`
            );
    //  https://www.googleapis.com/customsearch/v1?key=AIzaSyAGWyKCKgBfrp1O4VccD6BcaPDoM7hphj0&cx=358b7dafe9c8847ca&q=Bangladesh
    console.log(data);

    const result = data.json();
    return result;

};