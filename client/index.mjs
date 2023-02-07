class Resource {
    constructor() {
        this.title = null;
        this.counter = null; 
        this.add = null;
        this.sub = null;
    }

    createCounter(i) {
        const location = document.querySelector("main")

        const section = document.createElement("section");
        section.textContent = `Resource ${i}`;
        section.id = `sect${i}`;
        location.append(section);
        this.title = section.id

        const counter = document.createElement("p");
        counter.textContent = "0";
        counter.id = `counter${i}`;
        section.append(counter);
        this.counter = counter.id 

        const addButton = document.createElement("button");
        addButton.textContent = "+";
        addButton.id = `add${i}`;
        section.append(addButton);
        addButton.addEventListener('click', increaseCounter);
        this.add = addButton.id

        const subButton = document.createElement("button");
        subButton.textContent = "-";
        subButton.id = `minus${i}`;
        section.append(subButton);
        subButton.addEventListener('click', decreaseCounter);
        this.sub = subButton.id
    }

}


function init() {
    buildApp();
}

function buildApp() {
    for (let i=1; i <= 5; i++) {
        let newCounter = new Resource;
        newCounter.createCounter(i);
    }

}

function increaseCounter(event) {  
    const button = event.target;
    console.log(button)
}

function decreaseCounter(event) {  
    console.log(event)
}


window.addEventListener('load', init);