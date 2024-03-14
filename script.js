document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Create object to hold user data
    var userData = {
        name: name,
        email: email
    };

    // Store data in local storage
    if(localStorage.getItem("users")) {
        var users = JSON.parse(localStorage.getItem("users"));
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));
    } else {
        var users = [userData];
        localStorage.setItem("users", JSON.stringify(users));
    }

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    // Display all user data
    displayUserData();
});

// Function to display all user data
function displayUserData() {
    var userDataContainer = document.getElementById("userData");
    userDataContainer.innerHTML = ""; // Clear previous data

    var users = JSON.parse(localStorage.getItem("users"));

    if (users) {
        users.forEach(function(user, index) {
            userDataContainer.innerHTML += "<p><strong>User " + (index + 1) + ":</strong><br>Name: " + user.name + "<br>Email: " + user.email + "</p>";
        });
    } else {
        userDataContainer.innerHTML = "<p>No user data found.</p>";
    }
}
