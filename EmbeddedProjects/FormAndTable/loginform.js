const login = document.getElementById("login-form");
const iname = document.getElementById("input-name");
const ipassword = document.getElementById("input-password");

login.addEventListener('submit', (e) => {
    e.preventDefault();

    if (iname.value != "" && ipassword.value != "") {
        if (ipassword.value.length >= 2 && ipassword.value.search("b") != -1) {
            if (iname.value == "ben" || iname.value == "kim") {
                alert("Welcome " + iname.value + "!");
                window.location = "./data.html";
            } else {
                alert("No admin named: " + iname.value + "!");
            }
        } else {
            alert("Incorrect password!");
        }
    }
});