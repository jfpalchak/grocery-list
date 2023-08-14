
function handleSubmit(e) {
    e.preventDefault();

    const groceryItems = document.querySelectorAll("input[name=grocery-option]:checked");

    const groceryItemsArray = Array.from(groceryItems);

    // groceryItemsArray.sort();
    const groceryArrayCapt = []
    groceryItemsArray.forEach(function(element) {
        groceryArrayCapt.push(element.value.toUpperCase());
    });
    
    groceryArrayCapt.sort();

    const ul = document.createElement("ul");
    document.body.append(ul);

    groceryArrayCapt.forEach(function(itemsList) {
        let li = document.createElement("li");
        li.append(itemsList);
        ul.append(li);
    });

    document.querySelector('form').setAttribute('class', 'hidden');
    // let form = document.querySelector('form');
    // form.remove();
    

}





function handleEverything() {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
}

window.addEventListener('load', handleEverything);