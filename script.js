let primaryNav = document.querySelector('.primary-navbar')
let navToggleBtn = document.querySelector('.nav-toggle')


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


// Form


