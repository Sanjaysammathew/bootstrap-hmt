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