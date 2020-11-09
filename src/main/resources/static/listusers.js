listusers();
function listusers() {
    let tableUsers = document.getElementById("usersTable");
tableUsers.innerHTML="";
    fetch("http://localhost:8080/listUsers")
        .then(response => response.json())
        .then(list => {
            list.forEach(function (user){

                let row= tableUsers.insertRow();
                let cell0 = row.insertCell();
                cell0.innerHTML = user.id;
                let cell1 = row.insertCell();
                cell1.innerHTML = user.name;
                let cell2 = row.insertCell();
                cell2.innerHTML = user.email;
                let cell3 = row.insertCell();
                cell3.innerHTML = getRoles(user).textContent;
                let cell4 = row.insertCell();
                cell4.innerHTML = '<button type="button" onclick="modaledit(' + user.id + ')" class="btn btn-info btn-sm text-white">\n Edit</button>\n';
                let cell5 = row.insertCell();
                cell5.innerHTML = '<button type="button" onclick="modaldelete(' + user.id + ')" class="btn btn-danger btn-sm text-white"> Delete </button>\n';
            })
        } )
}