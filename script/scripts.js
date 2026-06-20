let btnNext = document.querySelector(".next");
let btnBack = document.querySelector(".back");

let container = document.querySelector(".container");
//let list = document.querySelector(".list");

let list = document.querySelector(".container .list");

//let thumb = document.querySelector(".thumb");
let thumb = document.querySelector(".container .thumb");

//btnNext.addEventListener(onclick, moveItensOnClick(next));
btnNext.onclick = () => moveItensOnClick("next");

//btnBack.addEventListener(onclick, moveItensOnClick(back));
btnBack.onclick = () => moveItensOnClick("back");

function moveItensOnClick(type) {

    let listItems = document.querySelectorAll(".list .list_item");
    //let listItems = document.querySelectorAll(".list_item")
    let thumbItems = document.querySelectorAll(".thumb .thumb_item");
    //let thumbItems = document.querySelectorAll(".thumb_item")

    if (type === "next") {
        list.appendChild(listItems[0]);
        thumb.appendChild(thumbItems[0]);
        container.classList.add("next");
    } else {
        list.prepend(listItems[thumbItems.length -1]);
        thumb.prepend(thumbItems[thumbItems.length -1]);
        container.classList.add("back");
    }

    setTimeout(() => {
        container.classList.remove("next");
        container.classList.remove("back");
    }, 3000);

}