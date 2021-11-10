const monthNames = [ 'янв', 'фев', 'мар', 'апр', 'мая', 'июня', 'июля', 'авг', 'сен', 'окт', 'ноя', 'дек' ];
const yearInMs = 3.15576e+10;

export function getMonth(data) {
  data.toLocaleString('default', { month: 'long' });
}

export function getAge(birthDate) {
  Math.floor((new Date() - new Date(birthDate).getTime()) / yearInMs);
}
