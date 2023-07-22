var userInput = document.getElementById("inputList").value;

function newItem() {
    //  Create an new li node
    var node = document.createElement("li");

    //  Create a text node or get it from the input
    var textnode = document.createTextNode(document.getElementById("inputList").value);

    //  Append the text node to li node
    if(textnode === '') {
        console.log("you havent wrote anything down");
    } else {
        console.log("You wrote " + textnode);
        node.appendChild(textnode);
        document.getElementById("list").appendChild(node);
    }

    document.getElementById("inputList").value = " ";
}