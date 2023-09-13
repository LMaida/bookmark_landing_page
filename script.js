const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeDropdownMenu = document.querySelector(".close-dropdown-menu");
const dropdownNavigation = document.querySelector(".dropdown-navigation");
const mobilenavigation = document.querySelector(".mobile-navigation");
const featuresButtons = document.querySelectorAll(".btn-section-two");
const questions = document.querySelectorAll(".question");
const inputEmail = document.querySelector(".input-email");
const btnContactUs = document.querySelector(".btn-contact-us");


hamburgerMenu.addEventListener("click", ()=> {

    dropdownNavigation.classList.add("active");
    mobilenavigation.classList.add("unactive");

    document.body.style.overflow = "hidden";
})

closeDropdownMenu.addEventListener("click", () => {

    dropdownNavigation.classList.remove("active");
    mobilenavigation.classList.remove("unactive");

    document.body.style.overflow = "visible";

})

window.addEventListener("resize", () => {

    if (window.matchMedia("(min-width: 930px)").matches) {
        dropdownNavigation.classList.remove("active");
        mobilenavigation.classList.remove("unactive");
        document.body.style.overflow = "visible";
    } 
})

 featuresButtons.forEach(button => {
    button.addEventListener("click", ()=> {
        console.log(button)
    const sectionContnet = document.querySelector(".content-section-two");

    const tagName = button.innerHTML;
    console.log(tagName)

        switch (tagName) {
            case "Simple Bookmarking" : 

                featuresButtons.forEach((button) => button.classList.remove("active"));
                button.classList.add("active");

                sectionContnet.innerHTML = `
                    <div class="blue-shape"></div>
                    <div class="img-container">
                        <img src="/images/illustration-features-tab-1.svg" class="section-two-image">
                    </div>
                    <div class="text-container">
                        <h3 class="title">Bookmark in one click</h3>
                        <p class="text">Organize your bookmark however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.</p>
                        <button class="btn btn-more-info">More Info</button>
                    </div>
                `
                break;
                case "Speedy Searching" :

                    featuresButtons.forEach((button) => button.classList.remove("active"));
                    button.classList.add("active");

                    sectionContnet.innerHTML = `
                        <div class="blue-shape"></div>
                        <div class="img-container">
                            <img src="/images/illustration-features-tab-2.svg" class="section-two-image">
                        </div>
                        <div class="text-container">
                            <h3 class="title">Intelligent search</h3>
                            <p class="text">Our powerful search feature will hlep you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                            <button class="btn btn-more-info">More Info</button>
                        </div>
                    `
                break;
                case "Easy Sharing" : 
                    featuresButtons.forEach((button) => button.classList.remove("active"));
                    button.classList.add("active");
                    
                    sectionContnet.innerHTML = `
                        <div class="blue-shape"></div>
                        <div class="img-container">
                            <img src="/images/illustration-features-tab-3.svg" class="section-two-image">
                        </div>
                        <div class="text-container">
                            <h3 class="title">Share your bookmarks</h3>
                            <p class="text">Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                            <button class="btn btn-more-info">More Info</button>
                        </div>
                    `
                    break;
        }
    })
 })

questions.forEach(question => {
    question.addEventListener("click", () => {

        if (question.classList.contains("active")) {
            question.classList.remove("active")
        } else
        question.classList.add("active")
    })
})

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

inputEmail.addEventListener("keydown", () => {
    email = inputEmail.value.trim();

    if (validateEmail(email)) {
        inputEmail.parentElement.classList.remove("error")
    } else {
        inputEmail.parentElement.classList.add("error")
    }

    if (email === "") {
        inputEmail.parentElement.classList.remove("error")
    }
})

btnContactUs.addEventListener("click", () => {
    email = inputEmail.value.trim();

    if (validateEmail(email)) {
        inputEmail.parentElement.classList.remove("error")
    } else {
        inputEmail.parentElement.classList.add("error")
    }
    
})
