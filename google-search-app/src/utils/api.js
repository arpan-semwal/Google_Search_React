import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
    key:"AIzaSyDVkm8FjPpdPYvY4HLljSHE3c3mtTLWpHw",
    cx:"f17a7de0f528b4345"

}

export const fetchDataFromApi = async(payload) => {
    const {data} = await axios.get(BASE_URL , {
        params: {...params , ...payload}
    });

    return data;
};
