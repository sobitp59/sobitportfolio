let primaryNav = document.querySelector('.primary-navbar')
let navToggleBtn = document.querySelector('.nav-toggle')
let aboutPersona = document.querySelector('.about__persona')


// navbar for mobile 
navToggleBtn.addEventListener('click', ()=>{
    let visibility = primaryNav.getAttribute('data-visible')
    
    if(visibility === 'false'){
        primaryNav.setAttribute('data-visible', true)
        navToggleBtn.setAttribute('aria-expanded', true)
    }else{
        primaryNav.setAttribute('data-visible', false)
        navToggleBtn.setAttribute('aria-expanded', false)
    }
})


// typewriter effect
let phrases = ['Frontend Developer...', 'Technical Writer...', 'Constant Learner']
let phraseIndex = 0;
let letterIndex = 0;

function writeText(phrase){

    if(letterIndex == phrase.length){
        eraseText();
    }else if(letterIndex < phrase.length){
        aboutPersona.textContent += phrase[letterIndex]
        letterIndex+=1;
        
        setTimeout(()=>{
            writeText(phrase);
        }, 150)
    }
}


function eraseText(){
    let updatedPhrase = "";
    if(letterIndex == -1){
        phraseIndex = (phraseIndex + 1) % phrases.length;
        letterIndex = 0;
        writeText(phrases[phraseIndex]);
    }else if(letterIndex > -1){
        for(let i = 0; i < letterIndex; i++){
            updatedPhrase += phrases[phraseIndex].charAt(i)
        }

        aboutPersona.textContent = updatedPhrase;
        letterIndex-=1;
        setTimeout(eraseText, 100);
    }
}

writeText(phrases[phraseIndex])
