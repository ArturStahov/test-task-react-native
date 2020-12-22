const API_KEY = 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'
const BASE_URL = 'https://api.unsplash.com/search/photos'

export default function FetchImageApi(query, page) {
    return fetch(`${BASE_URL}?client_id=${API_KEY}&page=${page}&query=${query}`)
        .then((response) => {
            if (!response.ok) {
                throw 'Oops sorry. Try again!';
            }
            return response.json();
        })

};

