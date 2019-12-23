const boldTxt = document.getElementById('bold');
const cursiveTxt = document.getElementById('italic');
const textDecoration = document.querySelectorAll('[name="text-decor"]');
for (let i = 0; i < textDecoration.length; i++) {
    textDecoration[i].addEventListener("change", e => {
        if (textDecoration[i].checked) {
            content.style.textDecoration = textDecoration[i].value;

        }
    })
};

function clickRadio(el) {
    let siblings = document.querySelectorAll("input[type='radio'][name='" + el.name + "']");
    for (let i = 0; i < siblings.length; i++) {
        if (siblings[i] != el)
            siblings[i].oldChecked = false;
    }
    if (el.oldChecked)
        el.checked = false;
    el.oldChecked = el.checked;
    content.style.textDecoration = 'none';
}
// 
boldTxt.addEventListener('change', e => {

    boldTxt.checked ? content.style.fontWeight = 'bold' : content.style.fontWeight = 'normal';
});
cursiveTxt.addEventListener('change', e => {

    cursiveTxt.checked ? content.style.fontStyle = 'italic' : content.style.fontStyle = 'normal';
});