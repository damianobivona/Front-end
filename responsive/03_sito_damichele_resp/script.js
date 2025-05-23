const menu = [
    {
      nome: "Margherita",
      ingredienti: "pomodoro, mozzarella, basilico",
      img: "https://picsum.photos/seed/margherita/400/300",
      prezzo: "e 7,00"
    },{
      nome: "Quattro Stagioni",
      ingredienti: "pomodoro, mozzarella, funghi, carciofi, olive",
      img: "https://picsum.photos/seed/stagioni/400/300",
      prezzo: "e 7,00"
    },
    {
      nome: "Diavola",
      ingredienti: "pomodoro, mozzarella, salame piccante",
      img: "https://picsum.photos/seed/diavola/400/300",
      prezzo: "e 7,00"
    },
    {
      nome: "Funghi",
      ingredienti: "pomodoro, mozzarella, funghi",
      img: "https://picsum.photos/seed/funghi/400/300",
      prezzo: "e 7,00"
    },
    {
      nome: "Pistacchio",
      ingredienti: "mozzarella, mortadella, granella di pistacchio",
      img: "https://picsum.photos/seed/pistacchio/400/300",
      prezzo: "e 7,00"
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
    
  function creaPizzaElement(pizzaData) {
    // Trova il nodo template nel DOM
    const template = document.querySelector('.pizza-div');

    // Clona il nodo (deep clone = true per includere anche i figli)
    const nuovaPizza = template.cloneNode(true);

    // Popola il clone con i dati forniti
    nuovaPizza.querySelector('.name').textContent = pizzaData.nome;
    nuovaPizza.querySelector('.price').textContent = pizzaData.prezzo;
    nuovaPizza.querySelector('.pizza-description').textContent = pizzaData.ingredienti;

    return nuovaPizza;

  }

  menu.forEach((pizza) => {
    console.log(pizza);
    const container = document.querySelector('#menu-container');
    const nuovaPizza = creaPizzaElement(pizza) 
    container.insertAdjacentElement("beforebegin", nuovaPizza);

  });

});



  // menuContainer.innerHTML = ""; //svuota il container altrimenti lo scriverebbe più volte
  

    // menu.forEach((pizza)  => { //funzione anonima
//       const pizzaDiv = document.createElement("div");
//       pizzaDiv.classList.add("pizza-div");
//             //crea un nuovo div per ciascuna pizza

//       const pizzaInfo = document.createElement("div");
//       pizzaInfo.classList.add("pizza-info");
//       pizzaDiv.appendChild(pizzaInfo);

//       const pizzaName = document.createElement("div");
//       pizzaName.classList.add("name");
//       pizzaInfo.appendChild(pizzaName);

//       const pizzaPrice = document.createElement("div");
//       pizzaPrice.classList.add("price");
//       pizzaInfo.appendChild(pizzaPrice);

//       const pizzaDescription = document.createElement("div")
//       pizzaDescription.classList.add("pizza-description");
//       pizzaDiv.appendChild(pizzaDescription);
        
// pizzaName.innerHTML = `<h4>${pizza.nome}</h4>`;
// pizzaPrice.innerHTML = `<h5>${pizza.prezzo}</h5>`;
// pizzaDescription.innerHTML = `<p>${pizza.ingredienti}</p>`;




// è un template LITERAL, ossia una STRINGA DINAMICA dove si possono inserire variabili direttamente dentro il testo.
              // Si usano le BACKTICK ` per renderlo dinamico
        /* menuContainer.appendChild(pizzaDiv);*/ // inserisce il div (pizzaDiv) appena creato all'interno del container principale (menuContainer)
            // (letteralmente "in menuContainer inserisci come figlio (appendChild) il div creato")
        // pizzaDiv.appendChild(pizzaDescr);    
    // })

// }
// )
