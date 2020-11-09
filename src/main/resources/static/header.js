header();

function header(){
    fetch("http://localhost:8080/userpage")
        .then(response => response.json())
        .then(user => {
        document.getElementById("header_email").innerHTML = user.email;
        document.getElementById("header_roles").innerHTML = 'with roles: ' + getRoles(user).textContent;
        });
}