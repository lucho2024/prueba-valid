/* eslint-disable prettier/prettier */
import axios from 'axios';

const BASE_URL = 'http://ws.audioscrobbler.com/2.0/?method=';
const API_KEY= "829751643419a7128b7ada50de590067";


class Api {
  getTopArtists = async (page) => {
    const url = `${BASE_URL}geo.gettopartists&country=spain&api_key=${API_KEY}&format=json&page=${page}`;
    const resultado = await axios.get(url);
   
    return resultado.data;
  };
  getTopTracks = async (page) => {
    const url = `${BASE_URL}geo.gettoptracks&country=spain&api_key=${API_KEY}&format=json&page=${page}`;
    const resultado = await axios.get(url);
   
    return resultado.data;
  };
  
}

export default new Api();
