var i = 0;
var j = 0;
var intervalTime = 0;
const txt = ['Explosives', 'Armors', 'Ammos', 'Knives', 'Weapons'];

let element = document.getElementById('weapons');

var openBtn = document.getElementById('opn');
var closeBtn = document.getElementById('cls');
closeBtn.style.display = 'none';
var sidebar = document.getElementById('sidebar');

/* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typing(id) {

    document.getElementById('weapons').removeEventListener('click',typing);

    for (let index = 0; index < txt.length; index++) {
        await sleep(600);
        element.innerHTML = '';

        for (let index2 = 0; index2 < txt[index].length; index2++) {
            await sleep(100);
            element.innerHTML += txt[index].charAt(index2);
        }
    }
   
    document.getElementById('weapons').addEventListener('click',typing);
}

typing();


let priceBtn = document.getElementById('pricingBtn');


function openSidebar() {
    
    
    openBtn.style.display = 'none';
    
    sidebar.style.transform = 'translate(0vw)';
    
    closeBtn.style.display = 'initial';

}


function closeSidebar() {
    
    closeBtn.style.display = 'none';
    
    sidebar.style.transform = 'translate(-50vw)';

    openBtn.style.display = 'initial';
}

// document.getElementById('sidebarLogo').addEventListener('click',()=>{
//     openBtn.style.display = 'initial';

// });

/* For scaling M4 info box */

// let r = document.querySelector(':root');
// let rs = getComputedStyle(r);

// window.addEventListener('resize', function(event){
//     var newWidth = window.innerWidth;
//     var newHeight = window.innerHeight;

//     r.style.setProperty("--scl", newWidth/1000);
//     console.log(newWidth/1000 * 2);

// });