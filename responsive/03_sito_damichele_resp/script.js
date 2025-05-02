const menu = [
    {nome: "Margherita", ingredienti: "pomodoro, mozzarella, origano, olio"},
    {nome: "Diavola", ingredienti: "pomodoro, mozzarella, origano, olio"},
    {nome: "Quattro stagioni", ingredienti: "pomodoro, mozzarella, origano, olio"},
    {nome: "Funghi", ingredienti: "pomodoro, mozzarella, origano, olio"},
    {nome: "Pistacchio", ingredienti: "pomodoro, mozzarella, origano, olio"}
];

console.log(menu);

const menuButton = document.getElementById("menu-button"); //per selezionare un elemento HTML in JS attraverso un id univoco

const menuContainer = document.getElementById("menu-container");

menuButton.addEventListener("click", function() {
    
    menuContainer.innerHTML = ""; //svuota il container

    menu.forEach((pizza) =>  {
        const pizzaDiv = document.createElement("div"); //crea un nuovo div per ciascuna pizza
        pizzaDiv.innerHTML = `<h4>${pizza.nome}</h4><p>${pizza.ingredienti}</p>` //è un template LITERAL, ossia una STRINGA DINAMICA dove si possono inserire variabili direttamente dentro il testo. Si usano e BACKTICK ` per renderlo dinamico
        menuContainer.appendChild(pizzaDiv); // inserisce il div (pizzaDiv) appena creato all'interno del container principale (menuContainer)
            // letteralmente "in menuContainer inserisci come figlio (appendChild) il div creato"
    })

});
