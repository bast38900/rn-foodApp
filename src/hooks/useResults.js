import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState();

    const searchApi = async searchTerm => {
        console.log('Hi There');
        try{
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses)
        } catch (err) {
            console.log(err);
            setErrorMessage('Try again, something went wrong...')
        }
    };

    useEffect(() => {
        searchApi('');
    }, []);

    return [searchApi, results, errorMessage];
};