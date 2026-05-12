 function loopCarousel(id, direction) {
            const track = document.getElementById(id);

            if (direction === 1) {
                track.style.transition = "transform 0.5s ease";
                const itemWidth = track.firstElementChild.offsetWidth + 20;
                track.style.transform = `translateX(-${itemWidth}px)`;

                track.addEventListener("transitionend", function handler() {
                    track.removeEventListener("transitionend", handler);
                    track.style.transition = "none";
                    track.appendChild(track.firstElementChild);
                    track.style.transform = "translateX(0)";
                });
            }

            if (direction === -1) {
                track.style.transition = "none";
                track.prepend(track.lastElementChild);
                const itemWidth = track.firstElementChild.offsetWidth + 20;
                track.style.transform = `translateX(-${itemWidth}px)`;

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        track.style.transition = "transform 0.5s ease";
                        track.style.transform = "translateX(0)";
                    });
                });
            }
        }

        
const scrollTopbtn=document.getElementById("scroll_top_btn");

window.addEventListener('scroll',()=>{
    scrollTopbtn.classList.toggle('visible',window.scrollY > 400)
},{passive:true})

    scrollTopbtn.addEventListener('click',()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
})


document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('.container');
    const menuBtn = document.querySelector('.mobile-menu-btn');

    window.addEventListener('scroll', () => {
        
        nav.classList.remove('show-links');

        if (window.scrollY > 50) {
            nav.classList.add('is-sticky');
        } else {
            nav.classList.remove('is-sticky');
        }
    });

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('show-links');
    });
});
