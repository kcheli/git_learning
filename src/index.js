function buttonClicked(value) {
    console.log(value)
    var element = document.getElementById(value);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function addToList(value){
    console.log("value at addToList: ", value)
    if (value.length > 0) {
        var unorderList = document.getElementById("submitList");
        var listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(value));
        listItem.setAttribute("id", value);
        unorderList.appendChild(listItem);
    } else {
        alert("Please enter a drummer's name!")
    }
}

