window.onload = function () {
    let header = document.getElementById('header');
    header.style.height = "100px";
};

function toggleSubmenuTree(elem) {
    let li = elem.parentElement;
    li.classList.toggle('expanded');
    let ul = elem.parentElement.nextElementSibling;
    ul.classList.toggle('visible');

};
