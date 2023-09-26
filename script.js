const gridContainer = document.getElementById('grid-container');

for (let row = 0; row < 16; row++) {
    for (let col = 0; col < 16; col++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }
}