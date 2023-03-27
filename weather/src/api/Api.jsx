import axios from 'axios';



const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = '78492ce9ba6d188474cd6a4661c8f289';


// fetching data from api width axios


export const Api =  async (query) =>{
    const { data } = await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID: API_KEY,
        }
    });
     return data;
}
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();