function closetheitem() {
    const element = document.querySelector(".checked");
    element.remove();
}

function newItem() {
    //  Create an new li node
    var node = document.createElement("li");
    var userInput = document.getElementById("inputList").value;

    //  Create a text node or get it from the input
    var textnode = document.createTextNode(userInput);

    //  Append the text node to li node
    node.appendChild(textnode);

    if(userInput === '') {
        alert("You havent wrote anything!");
    } else {
        console.log("You wrote " + textnode);
        document.getElementById("list").appendChild(node);
    }

    document.getElementById("inputList").value = "";
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    ev.target.classList.toggle('checked');
    ev.target.id = 'delete';
  }
);