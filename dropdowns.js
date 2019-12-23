const famBtn = document.getElementById('fontFamBtn');
const sizeBtn = document.getElementById('fontSizeBtn');
const famList = document.getElementById('fontFam');
const sizeList = document.getElementById('fontSyze');
const fontItems = document.querySelectorAll('[class="font__item"]');
const fontSizeItems = document.querySelectorAll('[class="font_size-item"]')


famBtn.addEventListener('click', e => {
    famList.classList.toggle('hidden');
    sizeList.classList.add('hidden');
})

sizeBtn.addEventListener('click', e => {

    sizeList.classList.toggle('hidden');
    famList.classList.add('hidden')
});


for (let i = 0; i < fontItems.length; i++) {
    fontItems[i].addEventListener('click', e => {
        famList.classList.add('hidden');
    })
}
for (let x = 0; x < fontSizeItems.length; x++) {
    fontSizeItems[x].addEventListener('click', e => {
        sizeList.classList.add('hidden');
    })
};


for (let x = 0; x < fontSizeItems.length; x++) {
    fontSizeItems[x].addEventListener('click', e => {
        contentBlock.style.fontSize = fontSizeItems[x].value;
    })
}

for (let q = 0; q < fontItems.length; q++) {
    fontItems[q].addEventListener('click', e => {
        contentBlock.style.fontFamily = fontItems[q].value;
    })
}