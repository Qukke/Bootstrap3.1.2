function edituser(){

    fetch('http://localhost:8080/edit', {
        method: 'PUT',
        body: JSON.stringify({
            id: window.formEditUser.id.value,
            name: window.formEditUser.name.value,
            email: window.formEditUser.email.value,
            password: window.formEditUser.passwd.value,
            roles: window.formEditUser.roles.value
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => response.json())
        .then(user => {
            listusers();
        });
}