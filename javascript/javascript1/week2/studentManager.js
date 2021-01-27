/*
 * Hack Your Future, Javascript, homework Week2
 * this file includes:
   Student manager program for adding up to 6students to a class.
*/

const class07Students = [];
function addStudentToClass(studentName) {
    if (studentName === "Queen") {
        class07Students.push(studentName);
        return 'We always have a space for our Queen';
    } else if (!studentName) {
        return 'Please write student name.';
    } else if (duplicateCheck(studentName)) {
        return 'We already have ' + studentName + ' in the class 07.';
    } else if (getNumberOfStudents() > 5) {
        return 'Class 07 is full. We can not add the student name to it';
    } else {
        class07Students.push(studentName);
        return studentName + ' has been added to the class 07.';
    }
};

function getNumberOfStudents() {
    return class07Students.length;
};

function duplicateCheck(studentName) {
    for (let i = 0; i < getNumberOfStudents(); i++) {
        if (class07Students[i] === studentName) {
            return true;
        }
    }
    return false;
};

console.log(addStudentToClass("Hani Far"));
console.log(addStudentToClass("Reza Far"));
console.log(addStudentToClass("Hani Far"));
console.log(addStudentToClass("Martin Az"));
console.log(addStudentToClass("Reza Far"));
console.log(addStudentToClass("Ava Solat"));
console.log(addStudentToClass("Emir Mah"));
console.log(addStudentToClass("Martin Az"));
console.log(addStudentToClass("Suzi Az"));
console.log(addStudentToClass(""));
console.log(addStudentToClass("Sam Bo"));
console.log(addStudentToClass("Queen"));
console.log(addStudentToClass("Aida Mir"));
console.log(getNumberOfStudents());
console.log(class07Students);