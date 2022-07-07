const gradeStudent = (studentRecord) => {
  const isAGrade = studentRecord.totalMarks >= 90 ? true : false;
  const checkCriteria = studentRecord.examType === "Final exams" && isAGrade;
  return checkCriteria;
};

const studentRecord = {
  totalMarks: 85,
  examType: "Mid-sem exams",
};

console.log(gradeStudent(studentRecord));
