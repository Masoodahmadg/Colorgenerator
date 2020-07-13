const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const color = document.querySelector('.c-name')
const button = document.getElementById('generate')
button.addEventListener("click", function () {
    var z = Math.floor(Math.random() * 4)
    document.body.style.backgroundColor = colors[z]
    color.innerHTML = colors[z]
})