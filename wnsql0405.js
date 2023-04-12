var itemList = [];
var addBtn = document.getElementById('add');
addBtn.addEventListener("click", addList);

function addList(){
    var item = document.getElementById('item');
    console.log( item.value);
    if (item != null){
        itemList.push(item.value);//itemList item
        item.value="";
        item.focus();//item autofocus    
    }
    showList(); 
}

function showList(){
    var ul = document.getElementById("ulist");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(itemList.shift()));
    var dBtn = document.createElement('button');
    dBtn.appendChild(document.createTextNode('X'));
    li.appendChild(dBtn);
    ul.appendChild(li);

    dBtn.addEventListener('click', function() {
        if(this.parentNode.parentNode)
        this.parentNode.parentNode.remove('this.parentNode');
    })
}


