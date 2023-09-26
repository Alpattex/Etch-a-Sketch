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

const reset = document.querySelector('#reset');

reset.addEventListener('click', function () {
    // Clear the grid and reset colors to default
    // ...
});

const rgb = document.querySelector('#rgb');

rgb.addEventListener('click', function () {
    // Implement random color hover effect
    // ...
});
