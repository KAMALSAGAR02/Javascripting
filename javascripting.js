// JavaScript code to validate a form with username, email, phone number, password, and confirm password fields
function formsubmit() {
    let name = document.getElementById("username");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone no.");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");

    if (password.value === confirmPassword.value) {
        if (name.value === "" || email.value === "" || phone.value === "" || password.value === "" || confirmPassword.value === "") {
            alert("Please fill in all fields.");
            return false;
        } else if (password.value.length < 8) {
            alert("Password must be at least 8 characters long.");
            return false;
        } else if (phone.value.length < 10) {
            alert("Phone number must be at least 10 digits long.");
            return false;
        } else if (isNaN(phone.value)) {
            alert("Phone number must contain only digits.");
            return false;
        } else if (!/^[a-zA-Z0-9]+$/.test(name.value)) {
            alert("Username must contain only letters and numbers.");
            return false;
        } else if (!/^[a-zA-Z0-9]+$/.test(password.value)) {
            alert("Password must contain only letters and numbers.");
            return false;
        } else if (!/^[a-zA-Z0-9]+$/.test(confirmPassword.value)) {
            alert("Confirm Password must contain only letters and numbers.");
            return false;
        } else if (password.value !== confirmPassword.value) {
            alert("Passwords do not match!");
            return false;
        } else if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1) {
            alert("Please enter a valid email address.");
            return false;
        }
        alert("Form submitted successfully!");
        document.writeln("Username: " + name.value + "<br>");
        document.writeln("Email: " + email.value + "<br>");
        document.writeln("Phone No.: " + phone.value + "<br>");
        document.writeln("Password: " + password.value + "<br>");
        document.writeln("Confirm Password: " + confirmPassword.value + "<br>");
        document.writeln("Form submitted successfully!");

        // Add an image and some CSS when the alert opens
        let img = document.createElement("img");
        img.src = "https://th.bing.com/th/id/OIP.zhR9P4qTdZxe1T0FeAUMAQHaEK?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"; // Replace with your image URL
        img.alt = "Success Image";
        img.style.display = "block";
        img.style.margin = "20px auto";
        img.style.border = "2px solid #4CAF50";
        img.style.borderRadius = "10px";

        let messageDiv = document.createElement("div");
        messageDiv.style.textAlign = "center";
        messageDiv.style.fontFamily = "Arial, sans-serif";
        messageDiv.style.color = "#4CAF50";
        messageDiv.style.marginTop = "20px";
        messageDiv.innerHTML = "<h2>Form Submitted Successfully!</h2>";

        document.body.appendChild(img);
        document.body.appendChild(messageDiv);

        // Print the current date and time
        let dateTimeDiv = document.createElement("div");
        dateTimeDiv.style.textAlign = "center";
        dateTimeDiv.style.fontFamily = "Arial, sans-serif";
        dateTimeDiv.style.color = "#333";
        dateTimeDiv.style.marginTop = "10px";

        let currentDate = new Date();
        dateTimeDiv.innerHTML = `<p>Date: ${currentDate.toLocaleDateString()}</p><p>Time: ${currentDate.toLocaleTimeString()}</p>`;

        document.body.appendChild(dateTimeDiv);

        // Add welcome message
        let welcomeDiv = document.createElement("div");
        welcomeDiv.style.textAlign = "center";
        welcomeDiv.style.fontFamily = "Arial, sans-serif";
        welcomeDiv.style.fontWeight = "bold";
        welcomeDiv.style.fontSize = "40px";
        welcomeDiv.style.color = "red";
        welcomeDiv.style.marginTop = "20px";
        welcomeDiv.innerHTML = "Welcome to Netflix";

        document.body.appendChild(welcomeDiv);

        return true;
    } else {
        alert("Passwords do not match!");
    }
}

