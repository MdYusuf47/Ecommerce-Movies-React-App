import axiox from 'axios';

const instance = axiox.create({
    // baseURL: "https://api.themoviedb.org/3"
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;