'use strict'
const GI = {
	createElement (tag, atributes) {
        const element = document.createElement(tag);
        if (atributes){
            for(let key in atributes){
                element.setAttribute(key,attributes[key]);
            }
        }
		return element;
	}
}


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]

const lista = document.getElementById("lista");

function createTodo(tod) {
    const li = GI.createElement("li");
    const checkbox = GI.createElement("input", {
        type: "checkbox"
    });

const span= GI.createElement("span");
span.textContent = tod;
checkbox.addEventListener("change", function () {
    if (this.checked) {
        span.classList.add("completed");
    }else{
        span.classList.remove("completed")
    }
});
    li.appendChild(checkbox);
    li.appendChild(span);
    lista.appendChild(li);
}

to_do.forEach(createTodo)