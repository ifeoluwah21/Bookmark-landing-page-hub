//Toggling the Menu Navigation

const openMenuBtn = document.querySelector(`.header__menu-btn`);
const nav = document.querySelector(`.nav`);
const closeMenuBtn = document.querySelector(`.nav__close-btn`);

openMenuBtn.addEventListener(`click`, function (event) {
    //CHECK ARIA-HIDDEN IF TRUE
    if (nav.getAttribute(`aria-hidden`) !== `true`) return
    //IF ARIA-HIDDEN IS TRUE, SET IT TO FALSE AND ADD "show" TO CLASSLIST
    nav.setAttribute(`aria-hidden`, `false`);
    nav.classList.add(`show`);
})

closeMenuBtn.addEventListener(`click`, function (event) {
    //CHECK ARIA-HIDDEN IF FALSE
    if (nav.getAttribute(`aria-hidden`) === `true`) return
    //IF ARIA-HIDDEN IS FALSE, SET IT TO TRUE AND REMOVE "show" TO CLASSLIST
    nav.setAttribute(`aria-hidden`, `true`)
    nav.classList.remove(`show`);
})



//GETTING THE FEATURES
const featureNav = document.querySelector(`.feature-detail`)
//ADDING EVENTLISTENER
featureNav.addEventListener(`click`, function (event) {
    //console.log(event.target)
    if (event.target.matches(`.feature-detail__item`)) {
        let key = event.target.dataset.tab;
        const tab = featureNav.querySelector(`article[data-tab="${key}"]`);
        refactorClassName(featureNav);
        tab.classList.add(`active`);
        event.target.classList.add(`active`);
    }
    if (event.target.matches(`.feature-detail__item p`)) {
        let key = event.target.parentElement.dataset.tab;
        const tab = featureNav.querySelector(`article[data-tab="${key}"]`);
        refactorClassName(featureNav);
        tab.classList.add(`active`);
        event.target.parentElement.classList.add(`active`)
    }
})
// FUNCTION THAT REMOVES ALL THE ACTIVE CLASSES
function refactorClassName(parent) {
    let arrNav = parent.querySelectorAll(`li`);
    let arrTab = parent.querySelectorAll(`article[data-tab]`);
    arrNav.forEach(item => {
        item.classList.remove(`active`)
    })
    arrTab.forEach(item => {
        item.classList.remove(`active`)
    })
}

// FAQ LIST FEATURES
// GETTING THE LIST
const faq = document.querySelector(`.inquiry__list`);
faq.addEventListener(`click`, function (event) {
    if (event.target.matches(`.inquiry__term`)) {
        let key = event.target.dataset.faq;
        if (event.target.classList.contains(`active`)) {
            return refactorDlClassName(faq)
        }
        refactorDlClassName(faq);
        const tab = faq.querySelector(`.inquiry__definition[data-faq="${key}"]`);
        tab.classList.add(`active`);
        event.target.classList.add(`active`);
    }

    if (event.target.matches(`.inquiry__term svg`) || event.target.matches(`.inquiry__term img`)) {
        let key = event.target.parentElement.parentElement.dataset.faq;
        refactorDlClassName(faq)
        const tab = faq.querySelector(`.inquiry__definition[data-faq="${key}"]`);
        tab.classList.add(`active`)
        event.target.parentElement.parentElement.classList.add(`active`);
    }
})

// FUNCTION THAT REMOVES ALL THE ACTIVE CLASSES ON DEFINITION LIST
function refactorDlClassName(parent) {
    let arrDt = parent.querySelectorAll(`.inquiry__term`);
    let arrDd = parent.querySelectorAll(`.inquiry__definition[data-faq]`);
    arrDt.forEach(item => {
        item.classList.remove(`active`)
    })
    arrDd.forEach(item => {
        item.classList.remove(`active`)
    })
}


// PREVENT DEFAULT EVENT AND ACTION ON FORM

const form = document.querySelector(`.form`);
form.addEventListener(`submit`, (e) => {
    e.preventDefault();
})

// INPUT VALIDATION

const input = form.querySelector(`.form__email`);
const errorBox = form.querySelector(`.error`);
const errorText = form.querySelector(`.error__text`);

input.addEventListener(`blur`, (event) => {
    let value = input.value;
    if (value.includes(`@`) && value !== ``) {
        errorText.classList.remove(`active`);
        return errorBox.classList.remove(`active`);

    } else {
        errorText.classList.add(`active`);
        return errorBox.classList.add(`active`);
    }
})