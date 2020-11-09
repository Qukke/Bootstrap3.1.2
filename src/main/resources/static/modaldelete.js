function modaldelete(id) {
    fetch('http://localhost:8080/getById/' + id)
        .then(response => response.json())
        .then(user => {

            let modal = document.getElementById('modalWindow');
            modal.innerHTML =
                '<div id="removeModal"\n' +
                '      class="modal fade" tabindex="-1" role="dialog"\n' +
                '      aria-labelledby="TitleModalLabel2" aria-hidden="true"\n' +
                '      data-backdrop="static" data-keyboard="false">\n' +
                '     <div class="modal-dialog modal-dialog-scrollable">\n' +
                '         <div class="modal-content">\n' +
                '             <div class="modal-header">\n' +
                '                 <h5 class="modal-title" id="TitleModalLabel2">Delete user</h5>\n' +
                '                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
                '                     <span aria-hidden="true">&times;</span>\n' +
                '                 </button>\n' +
                '             </div>\n' +
                '             <div class="modal-body bg-white">\n' +
                '                 <form id="formRemoveUser"'+
                '                       class="form-signin mx-auto font-weight-bold text-center"\n' +
                '                       style="width: 200px;">\n' +
                '                     <p>\n' +
                '                         <label for="id">ID</label>\n' +
                '                         <input class="form-control form-control-sm" type="text"\n' +
                '                                name="id"   value= "' + user.id + '" readonly\n' +
                '                                value= "' + user.id + '">\n' +
                '                     </p>\n' +
                '                     <p>\n' +
                '                         <label for="name">Name</label>\n' +
                '                         <input class="form-control form-control-sm" type="text"\n' +
                '                                name="name" id="name2" readonly\n' +
                '                                value= "' + user.name + '">\n' +
                '                     </p>\n' +
                '                     <p>\n' +
                '                         <label for="email">Email</label>\n' +
                '                         <input class="form-control form-control-sm" type="email"\n' +
                '                                name="email" id="email2" readonly\n' +
                '                                 value= "' + user.email + '">\n' +
                '                     </p>\n' +
                '                     <p>\n' +
                '                         <label for="roles">Role</label>\n' +
                '                         <select id="roles2" name="roles"\n' +
                '                                 class="form-control form-control-sm"\n' +
                '                                 multiple size="2" readonly="">\n' +
                '                             <option>ADMIN</option>\n' +
                '                             <option>USER</option>\n' +
                '                         </select>\n' +
                '                     </p>\n' +
                '                 </form>\n' +
                '             </div>\n' +
                '             <div class="modal-footer">\n' +
                '                 <button type="button" class="btn btn-secondary"\n' +
                '                         data-dismiss="modal">Close</button>\n' +
                '                 <button class="btn btn-danger" data-dismiss="modal" onclick="deleteuser(' + user.id + ')">Delete</button>\n' +
                '             </div>\n' +
                '         </div>\n' +
                '     </div>\n' +
                ' </div>';

            $("#removeModal").modal();
        });
}