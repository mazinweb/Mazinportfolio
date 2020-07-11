//***************************** preloader window ******************************//
window.addEventListener("load", function () {
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function () {
        document.querySelector(".preloader").style.display = "none";
    }, 1000);
});
//************************** preloader window end******************************//

//************************** portfolio item filter******************************//

const filterContainer = document.querySelector('.portfolio-filter'),
    filterbtns = filterContainer.children,
    totalFilterBtn = filterbtns.length,
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    totalportfolioItems = portfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
    filterbtns[i].addEventListener("click", function () {
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        const filtervalue = this.getAttribute("data-filter");

        for (let k = 0; k < totalportfolioItems; k++) {
            if (filtervalue === portfolioItems[k].getAttribute("data-category")) {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
            else {
                portfolioItems[k].classList.add("hide");
                portfolioItems[k].classList.remove("show");
            }
            if (filtervalue === "all") {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
        }

    });
}
//************************** portfolio item filter end ******************************//

//************************portfolio lightbox***************************//

const lightbox = document.querySelector(".lightbox"),
    lightboximg = lightbox.querySelector(".lightbox-img"),
    lightboxtext = lightbox.querySelector(".caption-text"),
    lightboxclose = lightbox.querySelector(".lightbox-close"),
    lightboxcounter = lightbox.querySelector(".caption-counter");

let itemIndex = 0;
for (let i = 0; i < totalportfolioItems; i++) {
    portfolioItems[i].addEventListener("click", function () {
        itemIndex = i;
        changeitem();
        togglelightbox();
    });
}

function nextItem() {
    if (itemIndex === (totalportfolioItems - 1)) {
        itemIndex = 0;
    }
    else {
        itemIndex++;
    }
    changeitem();
}

function prevItem() {
    if (itemIndex === 0) {
        itemIndex = totalportfolioItems - 1;
    }
    else {
        itemIndex--;
    }
    changeitem();
}

function changeitem() {
    imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightboximg.src = imgSrc;
    lightboxtext.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxcounter.innerHTML = (itemIndex + 1) + " of " + totalportfolioItems;
}

function togglelightbox() {
    lightbox.classList.toggle("open");
}

//************************portfolio lightbox end ***************************//

//*************************** close lightbox***********************//
lightbox.addEventListener("click", function (event) {
    if (event.target === lightboxclose || event.target === lightbox) {
        togglelightbox();
    }
});
//*********************************** close lightbox end *****************//


//*********************************** aside navbar *****************//

const nav = document.querySelector(".nav"),
    navlist = nav.querySelectorAll("li"),
    totalnavlist = navlist.length,
    allsection = document.querySelectorAll(".section"),
    totalsections = allsection.length;

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    removeBacksectionClass();
    addBackSectionClass(sectionIndex);
    showSection(this);
    updateNav(this);
});

for (let i = 0; i < totalnavlist; i++) {
    const a = navlist[i].querySelector("a");
    a.addEventListener("click", function () {
        //********remove back section******//
        removeBacksectionClass();
        //******add back section******//
        for (let j = 0; j < totalnavlist; j++) {
            if (navlist[j].querySelector("a").classList.contains("active")) {
                addBackSectionClass(j);
            }
            navlist[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asidesectionToggleBtn();
        }
    });
}

function removeBacksectionClass() {
    for (let i = 0; i < totalsections; i++) {
        allsection[i].classList.remove("back-section");
    }
}

function addBackSectionClass(num) {
    allsection[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalsections; i++) {
        allsection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    for (let i = 0; i < totalnavlist; i++) {
        navlist[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navlist[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navlist[i].querySelector("a").classList.add("active");
        }
    }
}

//*********************aside navbar end *************************************//


//*********************open and close nav-toggler ***************************//
const navtogglerbtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navtogglerbtn.addEventListener("click", asidesectionToggleBtn);

function asidesectionToggleBtn() {
    aside.classList.toggle("open");
    navtogglerbtn.classList.toggle("open");
    for (let i = 0; i < totalsections; i++) {
        allsection[i].classList.toggle("open");
    }
}

//*********************open and close nav-toggler end ********//
//*********************run alrt  ********//
  function clickAlert() {
    alert("Sorry the Form not work !!");
}
//*********************run alrt end ********//



