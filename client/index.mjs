function init() {
    buildApp();
}

function createCounter(i) {
    const location = document.querySelector("main")

    const section = document.createElement("section");
    section.id = `sect${i}`;
    location.append(section);

    const title = document.createElement("h4")
    title.id = `title${i}`
    title.textContent = `Resourse ${i}`
    section.append(title);

    const counter = document.createElement("p");
    counter.textContent = 0;
    counter.id = `counter${i}`;
    section.append(counter);

    const addButton = document.createElement("button");
    addButton.textContent = "+";
    addButton.id = `add${i}`;
    section.append(addButton);
    addButton.addEventListener('click', changeCounter);

    const subButton = document.createElement("button");
    subButton.textContent = "-";
    subButton.id = `sub${i}`;
    section.append(subButton);
    subButton.addEventListener('click', changeCounter);
}

function buildApp() {
    for (let i=1; i <= 5; i++) {
        createCounter(i);
    }
}

function changeCounter() {  
    const id = this.id;
    const operation = id[0];
    const numb = id[3];
    
    const counter = document.querySelector(`#counter${numb}`);
    if (operation === "a") {
        const currentValue = ++counter.textContent;
        counter.textContent = currentValue;
    }
    
    else if (operation === "s") {
        const currentValue = --counter.textContent;
        counter.textContent = currentValue;
    }
}

window.addEventListener('load', init);