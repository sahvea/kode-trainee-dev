import criticalErrorImg from '../images/flying-saucer.png';
import searchErrorImg from '../images/magnifying-glass.png';

// const axios = require('axios');
export const API_URL = 'https://stoplight.io/mocks/kode-education/trainee-test/25143926';

// export const api = axios.create({
//   method: 'GET',
//   url: `${API_URL}/users`,
//   headers: {'Content-Type': 'application/json'}
// });

export const errorInfoConfig = {
  critical: {
    img: criticalErrorImg,
    title: 'Какой-то сверхразум все сломал',
    subtitle: 'Постараемся быстро починить',
  },
  search: {
    img: searchErrorImg,
    title: 'Мы никого не нашли',
    subtitle: 'Попробуй скорректировать запрос',
  },
};

export const tabArray = [
  {
    id: 0,
    name: 'Все',
  },
  {
    id: 1,
    name: 'Designers',
  },
  {
    id: 2,
    name: 'Analysts',
  },
  {
    id: 3,
    name: 'Managers',
  },
  {
    id: 4,
    name: 'iOS',
  },
  {
    id: 5,
    name: 'Android',
  },
];