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