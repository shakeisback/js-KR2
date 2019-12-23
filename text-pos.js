const textPos = document.querySelectorAll('[name="position"]');
const content = document.getElementById('contentBlock');


for (let i = 0; i < textPos.length; i++) {
    textPos[i].addEventListener("change", e => {
        if (textPos[i].checked) {
            content.style.textAlign = textPos[i].value;

        }
    })
};