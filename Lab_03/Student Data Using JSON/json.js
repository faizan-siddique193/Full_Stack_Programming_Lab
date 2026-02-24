// Create 3 students
const students = [
    { name: "Ali", age: 22, semester: 6, courses: ["JS", "HTML"] },
    { name: "Sara", age: 21, semester: 5, courses: ["DBMS", "OS"] },
    { name: "Ahmed", age: 23, semester: 7, courses: ["AI", "ML"] }
];

// Convert to JSON
const jsonString = JSON.stringify(students);

// Convert back to objects
const parsedStudents = JSON.parse(jsonString);

const studentList = document.getElementById("studentList");

let output = "";
parsedStudents.forEach(s => {
    output += `<div class="student-item">
        <strong>${s.name}</strong> | Age: ${s.age} | Semester: ${s.semester} | Courses: ${s.courses.join(", ")}
    </div>`;
});

studentList.innerHTML = output;