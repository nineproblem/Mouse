// get tab-content and tab-links

let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

// call openTab function

function openTab(tabname) {
    for (item of tabLinks) {
        item.classList.remove("active-link");
    }
    for (item of tabContents) {
        item.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let menu = document.querySelector('#menu-bars');
let header = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('fa-times')
    header.classList.toggle('active')
}
window.onscroll = () => {
    menu.classList.remove('fa-times')
    header.classList.remove('active')
}