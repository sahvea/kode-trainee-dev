const yearInMs = 3.15576e+10;

export function getAge(birthDate) {
  Math.floor((new Date() - new Date(birthDate).getTime()) / yearInMs);
}


// export function findUpcomingBirthday(dateString) {
//   const currentYear = new Date().getFullYear();
//   const birthDate = new Date(dateString);

//   const age = currentYear - birthDate.getFullYear();
//   const nextBirthday = birthDate.getFullYear()

//   const today = new Date();
//   let age = today.getFullYear() - birthDate.getFullYear();
//   const month = today.getMonth() - birthDate.getMonth();
//   if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate()))
//   {
//       age--;
//   }
//   return age;
// }

