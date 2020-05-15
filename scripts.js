document.addEventListener("DOMContentLoaded", function () {
    // creating div element and giving it a class name
    let div = document.createElement("div");
    div.className = "header-container";
    //creating unordered list 
    let ul = document.createElement("ul");
    // creating all the h1-through h6 elements and giving them class names
    let h1 = document.createElement("h1");
    h1.className = "h1";
    let h2 = document.createElement("h2");
    h2.className = "h2";
    let h3 = document.createElement("h3");
    h3.className = "h3";
    let h4 = document.createElement("h4");
    h4.className = "h4";
    let h5 = document.createElement("h5");
    h5.className = "h5";
    let h6 = document.createElement("h6");
    h6.className = "h6";
    //adding a button and giving it a class name
    let button = document.createElement("button");
    button.className = "button";
    //creating text for the button
    let buttonText = document.createTextNode("Click to add new list item");
    // creating text for all the h1-through h6 elements
    let h1Text = document.createTextNode("This is an h1!");
    let h2Text = document.createTextNode("This is an h2!");
    let h3Text = document.createTextNode("This is an h3!");
    let h4Text = document.createTextNode("This is an h4!");
    let h5Text = document.createTextNode("This is an h5!");
    let h6Text = document.createTextNode("This is an h6!");
    //appending text to the button
    button.appendChild(buttonText);
    //appending text to the h1-through h6's
    h1.appendChild(h1Text);
    h2.appendChild(h2Text);
    h3.appendChild(h3Text);
    h4.appendChild(h4Text);
    h5.appendChild(h5Text);
    h6.appendChild(h6Text);
    //appending button to the div element
    div.appendChild(button);
    //appending the h1-through h6's all to the same div 
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(h5);
    div.appendChild(h6);
    //appending the div to the body of the html document
    document.body.appendChild(div);
    // adding event listener to h1 to randomly change its color
    h1.addEventListener('dblclick', function () {
        let randomNum = getRandomInt(7);
        h1.style.color = colors[randomNum];
    });
    button.addEventListener('click', function () {
        createListItem();
    });

    function createListItem() {

        ++listItemNum;
        const li = document.createElement("li");
        li.addEventListener('click', function () {
            let randomListNum = getRandomInt(7);
            li.style.color = colors[randomListNum];
        });
        li.addEventListener('dblclick', function () {
            li.parentNode.removeChild(li);
        });
        let liText = document.createTextNode("this is list item" + " " + listItemNum);
        li.appendChild(liText);
        ul.appendChild(li)
        div.appendChild(ul);
    }
});

let colors = ["blue", "green", "black", "orange", "purple", "yellow", "red", "pink"];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var listItemNum = 0


