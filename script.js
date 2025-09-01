
let scrollbar = document.querySelector(".img-gal");
let leftbtn = document.getElementById("left-btn");
let rightbtn = document.getElementById("right-btn");

        scrollbar.addEventListener("wheel", (e) => {
            e.preventDefault();
            scrollbar.style.scrollBehavior = "smooth";
            console.log(scrollbar);
            scrollbar.scrollLeft += e.deltaY;
        });
        leftbtn.addEventListener("click", function () {
            scrollbar.style.scrollBehavior = "smooth";
            scrollbar.scrollLeft -= 520;

        })
        rightbtn.addEventListener("click", function () {
            scrollbar.style.scrollBehavior = "smooth";
            scrollbar.scrollLeft += 520;

        })
