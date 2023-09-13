import axios from 'axios';
import { DogResponse } from './model';

const DOG_API = 'https://dog.ceo/api/breeds/image/random';
const RANDOM_PICS_BY_CATEGORY_API =
  'https://random.imagecdn.app/v1/image?width=400&height=400&category=buildings';

class ImagesService {
  async getDog(): Promise<DogResponse> {
    const res = await axios.get(DOG_API);

    return res.data;
  }

  async getRandomPicByCategory(): Promise<any> {
    const res = await axios.get(RANDOM_PICS_BY_CATEGORY_API);

    return res.data;
  }
}

export default new ImagesService();
