//Getting the html tag with
let saveEL = document.getElementById("save-el")

let countEl = document.getElementById("count-el")

//declare a variable count
let count = 0

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countstr = count + "-";
    saveEL.textContent += countstr;
}