let countEl = document.getElementById("count-el")
let recordEl = document.getElementById("record-el")
let passenger = 0

function increment() {
     passenger += 1

    countEl.textContent = passenger
}

function save() {
   let countStr = passenger + " - "
    recordEl.textContent += countStr
    countEl.textContent = 0
     passenger = 0
}