import criticalErrorImg from '../images/flying-saucer.png';
import searchErrorImg from '../images/magnifying-glass.png';

export const API_URL = 'https://stoplight.io/mocks/kode-education/trainee-test/25143926';

export const nextYear = new Date().getFullYear()+1;

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
    tag: 'all',
  },
  {
    id: 1,
    name: 'Designers',
    tag: 'design',
  },
  {
    id: 2,
    name: 'Analysts',
    tag: 'analytics',
  },
  {
    id: 3,
    name: 'Managers',
    tag: 'management',
  },
  {
    id: 4,
    name: 'iOS',
    tag: 'ios',
  },
  {
    id: 5,
    name: 'Android',
    tag: 'android',
  },
];