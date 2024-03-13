const student = {
  name: "Santosh",
  age: 22,
  grade: "D"
};
function updateGrade(newGrade) {
  student.grade = newGrade;
}

updateGrade("B");
console.log(student);
