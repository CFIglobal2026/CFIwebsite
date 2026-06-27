function login() {

    // Get Employee ID entered by the user
    let id = document.getElementById("employeeID").value.trim();

    // Get Password entered by the user
    let password = document.getElementById("password").value.trim();

    // Search for matching employee
    let employee = employees.find(function(emp) {

        return emp.id === id && emp.password === password;

    });

    // If employee exists
    if (employee) {

        // Save employee details in browser
        localStorage.setItem("employee", JSON.stringify(employee));

        // Open Result Page
        window.location.href = "result.html";

    }

    // If login fails
    else {

        document.getElementById("error").innerHTML =
        "Invalid Employee ID or Password";

    }

}
