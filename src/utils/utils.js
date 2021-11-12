const yearInMs = 3.15576e+10;

export function getAge(birthDateString) {
  Math.floor((new Date() - new Date(birthDateString).getTime()) / yearInMs);
}

// function getAge(dateString) {
//   const today = new Date();
//   const birthDate = new Date(dateString);
//   const age = today.getFullYear() - birthDate.getFullYear();
//   const month = today.getMonth() - birthDate.getMonth();
//   if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//   }
//   return age;
// }

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