import axios from "axios";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_KEY;

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (query, page) => {
    console.log("ACCESS_KEY:", ACCESS_KEY);
    const response = await axios.get("/search/photos", {
        params: {
            query,
            page,
            per_page: 21,
        },
        headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
        },
    });

    return response.data;
};
