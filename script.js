let keyCheck = document.querySelector('.keys-checkbox input');
let pianoKey = document.querySelectorAll('.piano-key .key');

let allKey = [];
let audio = new Audio('tunes/a.wav');

keyCheck.addEventListener('click',function(e){
    
    pianoKey.forEach(key=>{
        key.classList.toggle("hide");
    });
});

pianoKey.forEach(item=>{
    //console.log(item.dataset.key);
    allKey.push(item.dataset.key);
    //console.log('allKey=',allkey);
    item.addEventListener('click', () => {
        console.log('clicked key =',item.dataset.key);
        playTune(item.dataset.key);
    });
});

function playTune(key){
    audio.src=`tunes/${key}.wav`;
    audio.play();

    const clickedKey= document.querySelector(`[data-key]="${key}"`);
    clickedKey.classList.add("active");

    setTimeout(()=>{
        clickedKey.classList.remove("active");

    },150);

}
//keyboard keys
document.addEventListener('keydown',function(e){
    if(allKey.includes(e.key)){
        playTune(e.key);
    }
})