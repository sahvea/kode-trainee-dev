import { Dispatch } from 'react';
import avatar from '../images/avatar-plug.png';
import { EmployeeData, ParsedEmployeeData } from '../utils/types';


export function parseEmployee(data: EmployeeData) {
  const newData: ParsedEmployeeData = {
    id: data.id,
    avatar: data.avatarUrl || avatar,
    name: `${data.firstName} ${data.lastName}`,
    nickname: `${data.userTag.toLowerCase()}`,
    post: data.position,
    birthDate: data.birthday,
    phone: data.phone
  };

  return newData;
}


export function getAge(birthDateString: string) {
  const today: Date = new Date();
  const birthDate: Date = new Date(birthDateString);
  let age: number = today.getFullYear() - birthDate.getFullYear();
  const month: number = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}


export function getNoun(number: number, one: string, two: string, five: string) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}


export function getPhoneNumber(number: string, setUrl: Dispatch<string>, setFinal: Dispatch<string>) {
  const numberWithSpaces: string = number.split('-').join(' ');
  setUrl('+' + number.split('-').join(''));
  setFinal('(' + numberWithSpaces.slice(0, 3) + ')' + numberWithSpaces.slice(3, 10) + ' ' + numberWithSpaces.slice(10))
}


export function sortArrayByBirthday(dateStringA: EmployeeData, dateStringB: EmployeeData) {
  const birthDateA: Date = new Date(dateStringA.birthday);
  const birthDateB: Date = new Date(dateStringB.birthday);

  if (birthDateA.getMonth() !== birthDateB.getMonth()) {
    return birthDateA.getMonth() - birthDateB.getMonth();
  } else {
    return birthDateA.getDate() - birthDateB.getDate();
  }
}


export function filterArrayByDepartament(arr: EmployeeData[], tag: string) {
  const lowerCaseTag: string = tag.toLowerCase();

  const result: EmployeeData[] = arr.filter(el => el.department.toLowerCase().includes(lowerCaseTag));
  return result;
}


export function filterArrayByName(arr: EmployeeData[], keyword: string) {
  const lowerCaseKeyword: string = keyword.toLowerCase().replace(/\s+/g, '');

  const result: EmployeeData[] = arr.filter(item => {
    return (
      item.firstName.toLowerCase().includes(lowerCaseKeyword) ||
      item.lastName.toLowerCase().includes(lowerCaseKeyword) ||
      item.userTag.toLowerCase().includes(lowerCaseKeyword)
    );
  });

  return result;
}