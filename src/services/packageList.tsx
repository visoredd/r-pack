import axios from 'axios';

const url = "https://600eda693bb1d100179e04dc.mockapi.io/api/v1/packages";

export const getPackageList = async()=>{
    const {data} = await axios.get(url);
    return data;
}