// Your JavaScript goes here.
window.addEventListener('load', function () {

    const ELEMENTS = document.querySelectorAll(".second_five > li")
    const BUTTON = document.querySelector('#toggle_button')

    var toggleStatus = false
    BUTTON.addEventListener('click', function (e) {
        if (toggleStatus == false) {
            ELEMENTS.forEach(function (element) {
                element.style.display = 'flex'
                toggleStatus = true
            })
        }
        else {
            ELEMENTS.forEach(function (element) {
                element.style.display = 'none'
                toggleStatus = false
            })
        }
    })

})