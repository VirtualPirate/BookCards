let minus_icon = document.querySelectorAll(".book-card-minus");
console.log(minus_icon.length)

minus_icon.forEach(card => {
    card.addEventListener("click", function clickfunc(event){
        card.setAttribute("style", "display: none;")
        card.parentNode.setAttribute("style", "border: 0.15rem solid #8fd3fe; background: #daf0ff;")
        card.previousElementSibling.setAttribute("style", "display: block")
        card.previousElementSibling.previousElementSibling.setAttribute("style", "border: 1px solid #8fd3fe;")
    })
})

let tick_icon = document.querySelectorAll(".book-card-green-tick");
// console.log(tick_icon.length)

tick_icon.forEach(card => {
    card.addEventListener("click", function clickfunc(event){
        card.setAttribute("style", "display: none;")
        card.parentNode.setAttribute("style", "border: 0.15rem solid #ddd;")
        card.nextElementSibling.setAttribute("style", "display: block")
        card.previousElementSibling.setAttribute("style", "border: 1px solid #ddd;")
    })
})

//linear-gradient(#8fd3fe,#daf0ff, white);
