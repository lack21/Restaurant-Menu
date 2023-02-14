// lear
// JS

window.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.container');
    const allBtn = document.getElementById('all-btn');
    const breakfastBtn = document.getElementById('breakfast-btn');
    const lunchBtn = document.getElementById('lunch-btn');
    const shakesBtn = document.getElementById('shakes-btn');
    const dinnerBtn = document.getElementById('dinner-btn');

    allBtn.addEventListener('click', () => {
        menuItems.forEach((item) => {
            item.style.display = 'flex';
        });
    });

    breakfastBtn.addEventListener('click', () => {
        menuItems.forEach((item) => {
            item.style.display = 'none';
        });

        menuItems[0].style.display = 'flex';
    });

    lunchBtn.addEventListener('click', () => {
        menuItems.forEach((item) => {
            item.style.display = 'none';
        });

        menuItems[1].style.display = 'flex';
    });

    shakesBtn.addEventListener('click', () => {
        menuItems.forEach((item) => {
            item.style.display = 'none';
        });

        menuItems[2].style.display = 'flex';
    });

    dinnerBtn.addEventListener('click', () => {
        menuItems.forEach((item) => {
            item.style.display = 'none';
        });

        menuItems[3].style.display = 'flex';
    });
});