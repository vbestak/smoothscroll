var scroll = new SmoothScroll('nav a[href*="#"]');

const endSection = document.getElementById("end-section");



let timer = null,
    scrollFlag = false;
window.addEventListener('scroll', scrollEvent, false);

function scrollEvent(evt) {
    if(scrollFlag == true) clearTimeout(timer)
    else scrollFlag = true;
    
    timer = setTimeout( ()=>{
        if (window.pageYOffset > endSection.offsetTop-200) {
            let span = endSection.getElementsByTagName("span")[0];

            span.classList.add("pop")

            setTimeout(() => {
                span.classList.remove("pop")
            }, 1000);
            
            let interval = setInterval(() => {
                span.classList.add("pop")

                setTimeout(() => {
                    span.classList.remove("pop")
                }, 1000);

                setTimeout(() => {
                    clearInterval(interval)
                }, 4000);
            }, 2000);
            
            

            window.removeEventListener('scroll', scrollEvent)
        }
    }
        ,150)
    
}
    