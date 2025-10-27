const students = [
  { name: "k", marks: 75 },
  { name: "l", marks: 30 },
  { name: "m", marks: 90 },
  { name: "n", marks: 45 },
  { name: "o", marks: 20 },
];

const pStudents = students.filter(student => student.marks >= 40);
console.log(pStudents);

