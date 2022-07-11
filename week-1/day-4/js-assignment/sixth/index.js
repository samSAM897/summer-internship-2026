const checkIfSame = (userString, checkString) => {
  return userString.toUpperCase() === checkString.toUpperCase();
};
const gradeStudent = (studentRecord) => {
  const isFinalExam = checkIfSame(studentRecord.examType, "Final Exams");
  let grade;
  if (isFinalExam) {
    grade = studentRecord.totalMarks >= 90;
  } else {
    grade = studentRecord.totalMarks >= 89 ? "A+" : "Not an A+";
  }
  return grade;
};

const studentRecord = {
  totalMarks: 85,
  examType: "Mid-sem exams",
};

const studentRecord2 = {
  totalMarks: 91,
  examType: "Final Exams",
};

console.log(gradeStudent(studentRecord));
console.log(gradeStudent(studentRecord2));
