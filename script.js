const loginBtn = document.getElementById("login-btn");
const userName = document.getElementById("username");
const passWord = document.getElementById("password");
const roles = document.getElementsByName("role");

loginBtn.addEventListener("click", () => {
    let selectedRole = "";
    
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].checked) {
            selectedRole = roles[i].value;
        }
    }

    if (selectedRole === "Admin" && userName.value === "admin" && passWord.value === "admin123") {
        const currentUser = {
            username: userName.value,
            role: selectedRole
        };
        localStorage.setItem("LoggedInUser", JSON.stringify(currentUser));
        window.location.href = "adminpage/dashboard.html";
    }
    else if (selectedRole === "Employee") {
        let employees = JSON.parse(localStorage.getItem("employees")) || [];
        let matchedEmployee = employees.find(emp => emp.Name === userName.value);

        if (matchedEmployee && passWord.value === "emp123") {
            const currentUser = {
                username: userName.value,
                role: selectedRole
            };
            localStorage.setItem("LoggedInUser", JSON.stringify(currentUser));
            window.location.href = "employeepage/dashboard.html";
        } else {
            alert("Username not found or invalid password");
        }
    }
    else {
        alert("Invalid username, password, or role selected");
    }
});