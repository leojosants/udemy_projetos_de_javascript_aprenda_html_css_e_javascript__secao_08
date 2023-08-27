// selected elements
const generateButtonElement = document.querySelector('[data_generate_button]');
const colorsDivElement = document.querySelector('[data_colors]');

/* functions */
function generateColors() {
    colorsDivElement.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const color = generateRandomColor();

        const colorDiv = document.createElement('div');
        colorDiv.style.background = color;

        const colorName = document.createElement('p');
        colorName.textContent = color;
        colorName.style.color = color;

        colorDiv.appendChild(colorName);
        colorsDivElement.appendChild(colorDiv);
    };
};

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    };

    return color;
};

/* events */
generateButtonElement.addEventListener('click', generateColors);