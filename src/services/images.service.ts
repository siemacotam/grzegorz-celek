import axios from 'axios';
import { DogResponse, QuoteResponse } from './model';

const DOG_API = 'https://dog.ceo/api/breeds/image/random';
const RANDOM_PICS_API = 'https://random.imagecdn.app/v1/image?width=400&height=400';
const QUOTE_API = 'https://api.quotable.io/random';

const headers = { 'Access-Control-Allow-Origin': '*' };

class ImagesService {
  async getDog(): Promise<DogResponse> {
    const res = await axios.get(DOG_API);

    return res.data;
  }

  async getRandomPics(): Promise<any> {
    const res = await axios.get(RANDOM_PICS_API);

    return res.data;
  }

  async getQuotes(): Promise<QuoteResponse[]> {
    const res = await axios.get('https://api.quotable.io/quotes/random?limit=10');

    return res.data;
  }
}

export default new ImagesService();
