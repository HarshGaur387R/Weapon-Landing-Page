var i = 0;
var j = 0;
var intervalTime = 0;
const txt = ['Explosives', 'Armors', 'Ammos', 'Knives', 'Weapons'];

let element = document.getElementById('introLine2').firstElementChild;

/* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typing(id) {

    document.getElementById('introLine2').removeEventListener('click',typing);

    for (let index = 0; index < txt.length; index++) {
        await sleep(600);
        element.innerHTML = '';

        for (let index2 = 0; index2 < txt[index].length; index2++) {
            await sleep(100);
            element.innerHTML += txt[index].charAt(index2);
        }
    }
   
    document.getElementById('introLine2').addEventListener('click',typing);
}

typing();
