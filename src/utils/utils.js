export function getAge(birthDateString) {
  const today = new Date();
  const birthDate = new Date(birthDateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function getNoun(number, one, two, five) {
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

export function sortArrayByBirthday(dateStringA, dateStringB) {
  const birthDateA = new Date(dateStringA.birthday);
  const birthDateB = new Date(dateStringB.birthday);

  if (birthDateA.getMonth() !== birthDateB.getMonth()) {
    return birthDateA.getMonth() - birthDateB.getMonth();
  } else {
    return birthDateA.getDate() - birthDateB.getDate();
  }
}

export function filterArrayByDepartament(arr, tag) {
  const lowerCaseTag = tag.toLowerCase();

  const result = arr.filter(el => el.department.toLowerCase().includes(lowerCaseTag));
  return result;
}

export function filterArrayByName(arr, keyword) {
  const lowerCaseKeyword = keyword.toLowerCase().replace(/\s+/g, '');

  const result = arr.filter(item => {
    return (
      item.firstName.toLowerCase().includes(lowerCaseKeyword) ||
      item.lastName.toLowerCase().includes(lowerCaseKeyword) ||
      item.userTag.toLowerCase().includes(lowerCaseKeyword)
    );
  });

  return result;
}