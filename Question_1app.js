function generateStudentMarkSheets(students, Details) {
    return students.map(student => {
      const studentDetails = Details.find(detail => detail.Roll === student.Roll);
      const totalMarks = Object.values(studentDetails.subjects).reduce((total, mark) => total + mark, 0);
      const status = totalMarks >= 200 ? "pass" : "fail";
      
      return {
        name: student.name,
        Roll: student.Roll,
        ...studentDetails.subjects,
        total: totalMarks,
        status: status
      };
    });
  }
  
  // Input data
  const students = [
    { name: "Dhishan Debnath", Roll: 1 },
    { name: "Animesh Gupta", Roll: 2 },
    { name: "Tapas Sen", Roll: 3 },
    { name: "Misti Dutta", Roll: 4 },
    { name: "Chini Misra", Roll: 5 }
  ];
  const Details = [
    { Roll: 5, subjects: { math: 35, english: 56, chemistry: 76, computer: 68 } },
    { Roll: 3, subjects: { math: 33, chemistry: 12, computer: 50, english: 35 } },
    { Roll: 1, subjects: { math: 55, english: 75, chemistry: 76, computer: 94 } },
    { Roll: 4, subjects: { english: 12, chemistry: 85, computer: 68, math: 45 } },
    { Roll: 2, subjects: { math: 55, english: 56, computer: 48, chemistry: 12 } }
  ];
  
  // Generate student mark sheets
  const studentsMarkSheets = generateStudentMarkSheets(students, Details);
  console.log(studentsMarkSheets);