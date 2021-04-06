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

    let style = returnDrummingStyles(value)

    let text = `${value} - ${style}`

    if (style.includes('Sorry')) {
        alert(style)
    } else {
        var unorderList = document.getElementById("submitList"); // store 3. as variable
        
        var listItem = document.createElement("li"); // create 4. <li></li>
        
        listItem.appendChild(document.createTextNode(text)); // add text to 4. <li>user input - returned style</li>

        listItem.setAttribute("id", value); // add an id attribute to our new 4. <li id="user input">user input - returned style</li>

        unorderList.appendChild(listItem); // add 4. to 3. <ul id="submitList"><li id="user input">user input - returned style</li></ul
    }
}
function returnDrummingStyles(drummer){
    switch(drummer){
        case 'Chick Webb':
            return "Swing";
        case 'Baby Dodds':
            return 'Early jazz/New Orleans Style';
        case 'Max Roach':
            return 'Bebop';
        case 'Philly Joe Jones':
            return 'Hard bop';
        case 'Elvin Jones':
            return 'Post bop';
        case 'Tony Williams':
            return 'Post bop/Avant garde'
        case 'Kenny Clarke':
            return 'Bebop';
        case 'Papa Jo Jones':
            return 'Swing';
        case 'Ed Blackwell':
            return 'Free Jazz';
        default:
            return `Sorry! We do not know the name: ${drummer}`;      
            // return ('Sorry! We do not know the name: ', drummer);      
        }
}
// function addToList(value){
//     console.log("value at addToList: ", value)
//     if (value.length > 0) {
//         var unorderList = document.getElementById("submitList");
//         var listItem = document.createElement("li");
//         listItem.appendChild(document.createTextNode(value));
//         listItem.setAttribute("id", value);
//         unorderList.appendChild(listItem);
//     } else {
//         alert("Please enter a drummer's name!")
//     }
// }
// function drummingStyles(drummers){
//     var style;
//     var drummers = document.getElementById('submitList');
//     switch(drummers){
//         case 'Chick Webb':
//             style = "Swing";
//             break;
//         case 'Baby Dodds':
//             style = 'Early jazz/New Orleans Style';
//             break;
//         case 'Max Roach':
//             style = 'Bebop';
//             break;
//         case 'Philly Joe Jones':
//             style = 'Hard bop';
//             break;
//         case 'Elvin Jones':
//             style = 'Post bop';
//             break;
//         case 'Tony Williams':
//             style = 'Post bop/Avant garde'
//         case 'Kenny Clarke':
//             style = 'Bebop';
//             break;
//         case 'Papa Jo Jones':
//             style = 'Swing';
//             break;
//         case 'Ed Blackwell':
//             style = 'Free Jazz';
//             break;
//         default:
//             style = 'Sorry! We do not know that name';      
//         }
        
//     }

