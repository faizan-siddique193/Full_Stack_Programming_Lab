// Student Class using ES6
class Student {
    constructor(id, name, semester, courses) {
        this.id = id;
        this.name = name;
        this.semester = semester;
        this.courses = courses;
    }

    getStudentInfo() {
        return `
            <div class="student-card">
                <h3>${this.name}</h3>
                <p><strong>ID:</strong> ${this.id}</p>
                <p><strong>Semester:</strong> ${this.semester}</p>
                <p><strong>Courses:</strong> ${this.courses.join(", ")}</p>
            </div>
        `;
    }
}

// Using const for objects that won’t change
const student1 = new Student(101, "Faizan Siddique", 6, ["Web Development", "AI"]);
const student2 = new Student(102, "Muhammad Hayat", 5, ["DBMS", "Operating System"]);
const student3 = new Student(103, "Syed Muhammad Saleh Sahab", 4, ["Networking", "Software Engineering"]);

// Using let for variable that will be updated
let students = [student1, student2, student3];

let output = "";

// Dynamically display all students
students.forEach(student => {
    output += student.getStudentInfo();
});

document.getElementById("studentContainer").innerHTML = output;