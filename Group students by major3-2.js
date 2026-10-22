function groupStudentsByMajor(students) {
  return students.reduce((acc, student) => {
    const major = student.major;
    if (!acc[major]) {
      acc[major] = [];
    }
    acc[major].push(student);
    return acc;
  }, {});
}

// Test 
const studentsList = [
  { name: "Sara", major: "LIB" },
  { name: "Huda", major: "IT" },
  { name: "Renad", major: "NUR" }
];

console.log(groupStudentsByMajor(studentsList));