// Student Class
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.courses = new Set();
    }
}

// Map: Student ID => Student object
const students = new Map();

const studentList = document.getElementById("studentList");

// Add Student
document.getElementById("addStudentBtn").addEventListener("click", () => {
    const id = document.getElementById("studentId").value;
    const name = document.getElementById("studentName").value.trim();
    if(id && name && !students.has(id)) {
        students.set(id, new Student(id, name));
        displayStudents();
    }
});

// Add Course
document.getElementById("addCourseBtn").addEventListener("click", () => {
    const course = document.getElementById("courseInput").value.trim();
    if(course) {
        for(const student of students.values()) {
            student.courses.add(course);
        }
        displayStudents();
    }
});

// Save Data Simulation using Promise
document.getElementById("saveBtn").addEventListener("click", () => {
    new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(students.size>0) resolve("Data saved successfully!");
            else reject("No students to save.");
        },2000);
    }).then(msg => alert(msg))
      .catch(err => alert(err));
});

// Display
function displayStudents() {
    let output = "";
    for(const [id, student] of students) {
        output += `<div class="student-item">ID: ${id} | ${student.name} | Courses: ${[...student.courses].join(", ")}</div>`;
    }
    studentList.innerHTML = output;
}