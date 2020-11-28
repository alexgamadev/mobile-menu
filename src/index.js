document.querySelector('#navbar').addEventListener('click', ({currentTarget}) => {
    currentTarget.classList.toggle('opened');
    currentTarget.classList.toggle('closed');
    const menuItems = currentTarget.querySelectorAll('.menu-item');
    menuItems.forEach(element => {
        if(!element.classList.contains('main')) {
            element.classList.toggle('hidden');
        }
    });
});