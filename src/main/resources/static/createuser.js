function createuser(){
    fetch('http://localhost:8080/add', {
        method: 'POST',
        body: JSON.stringify({
            name: window.formNewUser.newName.value,
            email: window.formNewUser.newEmail.value,
            password: window.formNewUser.newPassword.value,
            roles: window.formNewUser.newRoles.value
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => {
            window.formNewUser.newName.value = "";
            window.formNewUser.newEmail.value= "";
            window.formNewUser.newPassword.value= "";
            window.formNewUser.newRoles.value= "";
            listusers();
        })

}