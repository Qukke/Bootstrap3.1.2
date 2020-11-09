user();
function user(user){
    fetch('http://localhost:8080/userpage')
        .then(response => response.json())
        .then(user => {
            let body = document.getElementById("user_page");
            body.innerHTML="";

            let row= body.insertRow(0);
                let cell0 = row.insertCell(0);
            cell0.innerHTML = user.id;
                let cell1 = row.insertCell(1);
            cell1.innerHTML = user.name;
                let cell2 = row.insertCell(2);
            cell2.innerHTML = user.email;
                let cell3 = row.insertCell(3);
            cell3.innerHTML = getRoles(user).textContent;
        })
}