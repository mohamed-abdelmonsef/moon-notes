function getId(id){
    document.getElementById('deleteNote').value = id 
}

function edit(id){
    var title = document.getElementById('title'+id).innerText
    var desc = document.getElementById('desc'+id).innerText
    document.getElementById('_id').value = id
    document.getElementById('titleInput').value = title
    document.getElementById('descInput').value = desc


}