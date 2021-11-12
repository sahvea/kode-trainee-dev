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

export function sortByAlphabet(a, b) {
  a.firstName.localeCompare(b.firstName);
}

export function sortByBirthday(dateStringA, dateStringB) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth()+1;
  const currentDay = today.getDate();

  const birthDateA = new Date(dateStringA.birthday);
  const birthDateB = new Date(dateStringB.birthday);

  let yearA = currentYear;
  let yearB = currentYear;

  if (birthDateA.getMonth()+1 < currentMonth) {
    yearA++;
  }

  if (birthDateB.getMonth()+1 < currentMonth) {
    yearB++;
  }

  if (birthDateA.getMonth()+1 === currentMonth && birthDateA.getDate() < currentDay) {
    yearA++;
  }

  if (birthDateB.getMonth()+1 === currentMonth && birthDateB.getDate() < currentDay) {
    yearB++;
  }

  if (yearA !== yearB) {
    return yearA - yearB;
  } else if (yearA === yearB && birthDateA.getMonth() !== birthDateB.getMonth()) {
    return birthDateA.getMonth() - birthDateB.getMonth();
  } else if (yearA === yearB && birthDateA.getMonth() === birthDateB.getMonth()) {
    return birthDateA.getDate() - birthDateB.getDate();
  }
}