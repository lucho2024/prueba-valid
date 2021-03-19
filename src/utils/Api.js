/* eslint-disable prettier/prettier */
import axios from 'axios';

const BASE_URL = 'http://ws.audioscrobbler.com/2.0/?method=';
const API_KEY = '829751643419a7128b7ada50de590067';

class Api {
  //Metodo que trae todos los artista de acuerdo a la pagina
  getTopArtists = async page => {
    const url = `${BASE_URL}geo.gettopartists&country=spain&api_key=${API_KEY}&format=json&page=${page}`;
    const resultado = await axios.get(url);

    return resultado.data.topartists.artist;
  };
  //Metodo que trae todos los tracks de acuerdo a la pagina
  getTopTracks = async page => {
    const url = `${BASE_URL}geo.gettoptracks&country=spain&api_key=${API_KEY}&format=json&page=${page}`;
    const resultado = await axios.get(url);

    return resultado.data.tracks.track;
  };
}

export default new Api();
