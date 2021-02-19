function buttonClicked(value) {
    console.log(value)
    var element = document.getElementById(value);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

