// raihan top-time
setInterval(setTime,1000)
function setTime(){
    const date = new Date();
    document.getElementById('time-show').innerHTML=date.toLocaleTimeString();
}



const cards = document.querySelectorAll('.card-main');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        const img = card.children[0].children[0].children[0];
        const imgSrc = img.dataset.img;
        img.src = `./images/${imgSrc}h.jpg`
    })
})
cards.forEach(card => {
    card.addEventListener('mouseout', () => {
        const img = card.children[0].children[0].children[0];
        const imgSrc = img.dataset.img;
        img.src = `./images/${imgSrc}.jpg`
    })
})