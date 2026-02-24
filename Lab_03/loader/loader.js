// Function returning a Promise
function fetchUsers() {
    return new Promise((resolve, reject) => {

        const isSuccess = true;

        setTimeout(() => {
            if (isSuccess) {
                resolve([
                    { id: 1, name: "Faizan Siddique" },
                    { id: 2, name: "Muhammad Hayat" },
                    { id: 3, name: "Syed Muhammad Saleh" }
                ]);
            } else {
                reject("Failed to load user data from server.");
            }
        }, 3000);

    });
}

// Button Click Event
document.getElementById("loadBtn").addEventListener("click", () => {

    const output = document.getElementById("output");
    output.innerHTML = "Loading users...";

    fetchUsers()
        .then(users => {
            let result = "";
            users.forEach(user => {
                result += `
                    <div class="user">
                        ID: ${user.id} | Name: ${user.name}
                    </div>
                `;
            });
            output.innerHTML = result;
        })
        .catch(error => {
            output.innerHTML = `<div class="error">${error}</div>`;
        });

});