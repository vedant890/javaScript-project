document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputBox');
    const list = document.getElementById('list');
    const button = document.getElementById('btn');

    function addText() {
        if (input.value === "") {
            alert("Enter your text");
        } else {
            let li = document.createElement('li');
            li.textContent = input.value;
            list.appendChild(li);
            input.value = "";
        }
    }

    list.addEventListener('click', function (e) {
        if (e.target.tagName === "LI") { // Change "li" to uppercase "LI"
            e.target.classList.toggle("checked"); // Corrected "classlist" to "classList"
        } else if(e.target.tagName === "SPAN") { // Change "span" to uppercase "SPAN"
            e.target.parentElement.remove(); // Corrected "parenElement" to "parentElement"
        }
    }, false);

    button.addEventListener('click', addText);
});
