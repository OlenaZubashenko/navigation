window.onload = function () {
    let header = document.getElementById('header');
    header.style.height = "100px";
};

function toggleSubmenuTree(elem) {
    let elem1 = elem.parentElement.nextElementSibling;
    elem1.classList.toggle('visible');

    let changeBtn = elem;
    changeBtn.classList.toggle("plus");
    changeBtn.classList.toggle("minus");
   
    let bcg = elem.parentElement;
    bcg.classList.toggle('item-mob-bcg');

    let imgColor = elem.previousElementSibling.getElementsByTagName("IMG");
    imgColor[0].classList.toggle('img-colored');
};
