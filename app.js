let listArray = [];

function generateList() {
    let newText = document.getElementById("newInput").value;

    listArray.push(newText)


    document.getElementById("newInput").value = "";
    console.log(newText)

    let newDiv = document.createElement("div");
    let newPara = document.createElement("p");
    let newButton = document.createElement("button");
    let newCheckbox = document.createElement("input")

    newPara.textContent = newText;
    newPara.classList.add("list-body");

    newButton.classList.add("remove");
    newButton.textContent = "remove";

    newButton.addEventListener("click", function() {
        removeList(newDiv)
    })


    newCheckbox.classList.add("check-box");
    newCheckbox.setAttribute("type", "checkbox");

    newDiv.appendChild(newPara);
    newDiv.appendChild(newButton);
    newDiv.appendChild(newCheckbox)

    newDiv.classList.add("content");

    let title = document.getElementsByClassName("title");

    title[0].insertAdjacentElement("afterend", newDiv)


}

function removeList(node) {
    if(node.parentNode) {
        node.parentNode.removeChild(node);
    }
}