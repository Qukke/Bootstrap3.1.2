function deleteuser(id){
        fetch("http://localhost:8080/remove/"+id,{
        method:'DELETE',
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then(() => {
                listusers();
            });
}