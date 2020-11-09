function getRoles(user){
    let roles = document.createElement('ul');

    for (let i = 0; i < user.roles.length; i++) {
        let role = document.createElement('li');
        role.textContent = user.roles[i].name + " ";
        roles.appendChild(role);
    }

    return roles;
}