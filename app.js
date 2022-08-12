const item = document.querySelector(".item")
const placeholders = document.querySelectorAll(".placeholder")
item.addEventListener("dragstart", dragstart)
item.addEventListener("dragend", dragend)

function dragstart(event){
event.target.classList.add("hold")
setTimeout(() => event.target.classList.add("hide"), 0)

}

for (const placeholder of placeholders){
    placeholder.addEventListener("dragover", dragover)
    placeholder.addEventListener("dragenter", dragenter)
    placeholder.addEventListener("dragleave", dragleave)
    placeholder.addEventListener("drop", drop)
}

function dragend(event){
    event.target.className="item"
}

function dragover(event){
    event.preventDefault()
}
function dragenter(event){
    event.target.classList.add("hover")
}
function dragleave(event){
    event.target.classList.remove("hover")
}
function drop(event){
    event.target.classList.remove("hover")
    event.target.append(item)
}