const menu = [
    {
      nome: "Margherita",
      ingredienti: "pomodoro, mozzarella, basilico",
      img: "https://picsum.photos/seed/margherita/400/300"
    },{
      nome: "Quattro Stagioni",
      ingredienti: "pomodoro, mozzarella, funghi, carciofi, olive",
      img: "https://picsum.photos/seed/stagioni/400/300"
    },
    {
      nome: "Diavola",
      ingredienti: "pomodoro, mozzarella, salame piccante",
      img: "https://picsum.photos/seed/diavola/400/300"
    },
    {
      nome: "Funghi",
      ingredienti: "pomodoro, mozzarella, funghi",
      img: "https://picsum.photos/seed/funghi/400/300"
    },
    {
      nome: "Pistacchio",
      ingredienti: "mozzarella, mortadella, granella di pistacchio",
      img: "https://picsum.photos/seed/pistacchio/400/300"
    }
  ];
  
console.log(menu);

// cerca e seleziona tutti gli elementi nel documento con la classe .item e .name-pizza,
// e salvali in due costanti
const itemDivs = document.querySelectorAll(".item"); 
const namePizzaDivs = document.querySelectorAll(".name-pizza");

// INSERIRE UNA IMG NEL div.item 
// NB: la differenza tra itemDivs e itemDiv, il secondo rappresenta un singolo .item di itemDivs
// e viene "autodichiarata" nella funzione
itemDivs.forEach(function(itemDiv, index) { 
    const pizza = menu[index]; // indica la posizione [i] dell'array (menu[0], menu[1] ecc)
    if (pizza) { //verifica che non ci siano più .item che elementi nell'array
        const img = document.createElement("img"); // crea un nuovo elemento img
        img.src = pizza.img; //definisce la fonte (dall'array)
        img.alt = pizza.nome; 
        img.classList.add("pizza-img"); //per applicare uno stile css (??)
        itemDiv.insertBefore(img, itemDiv.firstChild); // INSERISCE l'img come primo figlio (ossia, in alto) di .item
    }
});

// Inserire la descrizione nel div.name-pizza
// Per ogni nameDiv (che corrisponde al div.name-pizza) prende la pizza corrispondente dall'array e inserisce il contenuto
namePizzaDivs.forEach(function(nameDiv, index) {
    const pizza = menu[index];
    if (pizza) {
        nameDiv.innerHTML = `
        <h4>${pizza.nome}</h4>
        <p>${pizza.ingredienti}</p>
        `
    }
});

//per selezionare un elemento HTML in JS attraverso un ID univoco
const menuButton = document.getElementById("menu-button"); 
const menuContainer = document.getElementById("menu-container");

menuButton.addEventListener("click", function() {
    
  menuContainer.innerHTML = ""; //svuota il container altrimenti lo scriverebbe più volte

    menu.forEach(function(pizza)   {
        const pizzaDiv = document.createElement("div");
            //crea un nuovo div per ciascuna pizza

        pizzaDiv.innerHTML = `
            <h4>${pizza.nome}</h4>
            <p>${pizza.ingredienti}</p>
            `; // è un template LITERAL, ossia una STRINGA DINAMICA dove si possono inserire variabili direttamente dentro il testo.
              // Si usano le BACKTICK ` per renderlo dinamico
        menuContainer.appendChild(pizzaDiv); // inserisce il div (pizzaDiv) appena creato all'interno del container principale (menuContainer)
            // (letteralmente "in menuContainer inserisci come figlio (appendChild) il div creato")
    })

}
);
