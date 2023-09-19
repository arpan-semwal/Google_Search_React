import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
    key:"AIzaSyAUtKe2Qpo0K20h8hfOPOd9UW-t-2aFV1A",
    cx:"b00738f5a5fe9411a"

}

export const fetchDataFromApi = async(payload) => {
    const {data} = await axios.get(BASE_URL , {
        params: {...params , ...payload}
    });

    return data;
};
