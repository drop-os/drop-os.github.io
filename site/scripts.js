// Basic window dragging functionality
let draggingElement = null;
let offsetX, offsetY;

document.addEventListener('mousedown', function(e) {
    if (e.target.closest('.title-bar')) {
        draggingElement = e.target.closest('.window');
        offsetX = e.clientX - draggingElement.getBoundingClientRect().left;
        offsetY = e.clientY - draggingElement.getBoundingClientRect().top;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }
});

function onMouseMove(e) {
    if (draggingElement) {
        draggingElement.style.left = e.clientX - offsetX + 'px';
        draggingElement.style.top = e.clientY - offsetY + 'px';
    }
}

function onMouseUp() {
    draggingElement = null;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}

// Start Menu Toggle (if you want to add it later)
function toggleStartMenu() {
    const menu = document.getElementById('start-menu');
    menu.classList.toggle('hidden');
}
