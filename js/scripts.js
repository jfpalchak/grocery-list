
function handleSubmit(e) {
    e.preventDefault();

    










}

function handleEverything() {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
}

window.addEventListener('load', handleEverything);