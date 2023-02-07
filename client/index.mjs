class Resource {
    constructor(i) {
        this.title = `Resource ${i}`
        this.counter = 0 
        this.plus = null
        this.neg = null
    }

    

}


function init() {
    buildApp();
}

function buildApp() {
    const location = document.querySelector("main")

    for (let i=1; i <= 5; i++) {
        const section = document.createElement("section");
        section.textContent = `Resource ${i}`;
        section.id = `sect${i}`;
        location.append(section);

        const counter = document.createElement("p");
        counter.textContent = "0";
        counter.id = `counter${i}`;
        section.append(counter);
        
        const addButton = document.createElement("button");
        addButton.textContent = "+";
        addButton.id = `add${i}`;
        section.append(addButton);
        addButton.addEventListener('click', increaseCounter);

        const subButton = document.createElement("button");
        subButton.textContent = "-";
        subButton.id = `minus${i}`;
        section.append(subButton);
        subButton.addEventListener('click', decreaseCounter);
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