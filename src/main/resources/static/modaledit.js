function modaledit(id){
        fetch('http://localhost:8080/getById/' + id)
            .then(response => response.json())
            .then(user => {

                let modal = document.getElementById('modalWindow');
                modal.innerHTML =
                    '<div id="editModal"\n' +
                    '     class="modal fade" tabindex="-1" role="dialog"\n' +
                    '     aria-labelledby="TitleModalLabel" aria-hidden="true"\n' +
                    '     data-backdrop="static" data-keyboard="false">\n' +
                    '    <div class="modal-dialog modal-dialog-scrollable">\n' +
                    '        <div class="modal-content">\n' +
                    '            <div class="modal-header">\n' +
                    '                <h5 class="modal-title" id="TitleModalLabel">Edit user</h5>\n' +
                    '                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
                    '                    <span aria-hidden="true">&times;</span>\n' +
                    '                </button>\n' +
                    '            </div>\n' +
                    '            <div class="modal-body bg-white">\n' +
                    '                <form id="formEditUser"\n' +
                    '                      class="form-signin mx-auto font-weight-bold text-center"\n' +
                    '                      style="width: 200px;">\n' +
                    '                    <p>\n' +
                    '                        <label>ID</label>\n' +
                    '                        <input class="form-control form-control-sm" type="text"\n' +
                    '                               name="id"  id="id" readonly\n' +
                    '                               value = "' + user.id + '">\n' +
                    '                    </p>\n' +
                    '                    <p>\n' +
                    '                        <label for="name">Name</label>\n' +
                    '                        <input class="form-control form-control-sm" type="text"\n' +
                    '                               name="name" value = "' + user.name + '"\n' +
                    '                               id="name" placeholder="Name" required autofocus>\n' +
                    '                    </p>\n' +
                    '                    <p>\n' +
                    '                        <label for="email">Email</label>\n' +
                    '                        <input class="form-control form-control-sm" type="email"\n' +
                    '                               name="email" id="email" value = "' + user.email + '"\n' +
                    '                               placeholder="Email" required>\n' +
                    '                    </p>\n' +
                    '                    <p>\n' +
                    '                        <label for="passwd">Password</label>\n' +
                    '                        <input class="form-control form-control-sm" type="password"\n' +
                    '                               name="password" value = "' + user.password + '"\n' +
                    '                               id="passwd" placeholder="Password" required>\n' +
                    '                    </p>\n' +
                    '                    <p>\n' +
                    '                        <label for="roles">Role</label>\n' +
                    '                        <select id="roles" name="roles"\n' +
                    '                                class="form-control form-control-sm"\n' +
                    '                                multiple size="2" required>\n' +
                    '                            <option value = "ADMIN">ADMIN</option>\n' +
                    '                            <option value = "USER">USER</option>\n' +
                    '                        </select>\n' +
                    '                    </p>\n' +
                    '                </form>\n' +
                    '            </div>\n' +
                    '            <div class="modal-footer">\n' +
                    '                <button type="button" class="btn btn-secondary"\n' +
                    '                        data-dismiss="modal">Close</button>\n' +
                    '                <button type="submit" form="formEditUser" onclick="edituser()" \n' +
                    '                        class="btn btn-info" data-dismiss="modal">Edit</button>\n' +
                    '            </div>\n' +
                    '        </div>\n' +
                    '    </div>\n' +
                    '</div>';

                $("#editModal").modal();
            })
    }