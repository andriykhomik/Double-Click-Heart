const loveMe = document.querySelector('.loveMe');
const times =document.querySelector('#times');
let clickTime= 0;
let i = 0;

loveMe.addEventListener('click', (e)=> {
    if (clickTime === 0){
        clickTime = new Date().getTime();
    }else {
        if (new Date().getTime() - clickTime < 800){
            createHeart (e);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime();
        }
    }
})

const createHeart =(event) => {

    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = event.clientX;
    const y = event.clientY;

    const leftOffset = event.target.offsetLeft;
    const offsetTop = event.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - offsetTop;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    loveMe.appendChild(heart);
    ++i;
    times.innerText = i;

    setTimeout(()=> heart.remove(), 1000);
}

