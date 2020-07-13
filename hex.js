const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const primary = document.querySelector(".primary-color")
const second = document.querySelector(".secondary-color")
const third = document.querySelector(".tertiary-color")
const fourth = document.querySelector(".tetra-color")
const code1 = document.querySelector(".primary-code")
const code2 = document.querySelector(".secondary-code")
const code3 = document.querySelector(".tertiary-code")
const code4 = document.querySelector(".tetra-code")


document.addEventListener('keydown', (event) => {

    if (event.keyCode == 32) {
        let bg = "#"
        let bg2 = '#'
        let bg3 = '#'
        let bg4 = '#'
        for (let i = 0; i < 6; i++) {
            bg += hex[randommCode()]
            bg2 += hex[randommCode()]
            bg3 += hex[randommCode()]
            bg4 += hex[randommCode()]

        }
        primary.style.backgroundColor = bg
        second.style.backgroundColor = bg2
        third.style.backgroundColor = bg3
        fourth.style.backgroundColor = bg4

        code1.innerHTML = bg
        code2.innerHTML = bg2
        code3.innerHTML = bg3
        code4.innerHTML = bg4

    }
}, false);

function randommCode() {
    return Math.floor(Math.random() * hex.length)
}