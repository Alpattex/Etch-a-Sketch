const grid = document.querySelector('.grid');

createGrid = () => {
    for (let i = 0; i < 256; i++) {
        grid.appendChild(div);
    }
};

createGrid();

const slider = document.querySelector('#slider');
const screenVal = document.querySelector('.value');

slider.addEventListener('input', function () {
});
