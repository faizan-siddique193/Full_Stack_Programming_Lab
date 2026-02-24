// Create a Set to store unique courses
const registeredCourses = new Set();

// Add Course Button
document.getElementById("addBtn").addEventListener("click", () => {

    const input = document.getElementById("courseInput");
    const courseName = input.value.trim();

    if (courseName === "") {
        alert("Please enter a course name.");
        return;
    }

    // Add course to Set (duplicates automatically ignored)
    registeredCourses.add(courseName);

    // Attempt adding duplicate (for requirement demonstration)
    registeredCourses.add(courseName);

    input.value = "";

    displayCourses();
});

// Display courses using for...of loop
function displayCourses() {

    const courseList = document.getElementById("courseList");
    const totalCount = document.getElementById("totalCount");

    let output = "";

    for (const course of registeredCourses) {
        output += `<div class="course-item">${course}</div>`;
    }

    courseList.innerHTML = output;
    totalCount.textContent = registeredCourses.size;
}