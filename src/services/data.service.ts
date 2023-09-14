import axios from 'axios';
import { Quote } from './model';

const RANDOM_PICS_API = 'https://random.imagecdn.app/v1/image?width=400&height=400';
const QUOTE_API = 'https://api.quotable.io/quotes/random?limit=10';

class DateService {
  async getImage(): Promise<string> {
    const res = await axios.get(RANDOM_PICS_API);

    return res.data;
  }

  async getImages(): Promise<string[]> {
    const promises = [];

    for (let index = 0; index < 10; index++) {
      promises.push(this.getImage());
    }

    const pics = await Promise.all(promises);

    return pics || [];
  }

  async getQuotes(): Promise<Quote[]> {
    const res = await axios.get(QUOTE_API);

    return res.data;
  }
}

export default new DateService();
