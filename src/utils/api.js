import axios from "axios";

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '9656065-a4094594c34f9ac14c7fc4c39';

export function searchImages (props) {
    const {criteria = 'beautiful+landscape', image_type='photo', per_page = 6} = props;
    
    const search_url = `${API_URL}?key=${API_KEY}&image_type=${image_type}&q=${criteria}&per_page=${per_page}`;

    return axios.get(search_url);
}