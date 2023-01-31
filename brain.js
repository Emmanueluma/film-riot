const menu = document.getElementById('menu');
const link = document.querySelector('.links');


menu.addEventListener('click', e => {
    if (link.style.display == 'flex'){
        link.style.display = 'none';
    }else {
        link.style.display = 'flex'
    }
})