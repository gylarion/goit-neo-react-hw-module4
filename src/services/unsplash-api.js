import axios from "axios";

const ACCESS_KEY = "JVNSoV8DPqUFrUJ7MTh - 7t5Nbbatgk7pbXEBDffJuRo";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (query, page) => {
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
