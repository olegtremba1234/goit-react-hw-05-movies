import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
const API_KEY = '4b8864cf5207c2132295f1e95f786e7c'

const fetchTrendings = async () => {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
};

const fetchByKeyword = async keyword => {
    const response = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`);
    return response.data.results;
};

const fetchMovieDetails = async movieId => {
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    return response.data;
};

const fetchCast = async movieId => {
    const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
    return response.data.cast;
};

const fetchReviews = async movieId => {
    const response =await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data.results;
};

const fetch = {
    fetchTrendings,
    fetchByKeyword,
    fetchMovieDetails,
    fetchCast,
    fetchReviews,
};

export default fetch;