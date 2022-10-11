const dev = document.querySelectorAll('.dev');
const chef = document.querySelectorAll('.chef');
const design = document.querySelectorAll('.design');
const graphisme = document.querySelectorAll('.graphisme')
const checkDev = document.querySelector("#dev");
const checkChef = document.querySelector('#chef');
const checkDesign = document.querySelector('#design');
const checkGraphisme = document.querySelector('#graphistes');
const projets = document.querySelectorAll('.projet');
const search = document.querySelector('#search');
let userSearch;


// fonctions permettant d'ajouter ou retire la class none aux éléments d'une certaine classe
const checkFilterRemoveNone = (elemt) => {
    elemt.forEach(e => {
        e.classList.remove("none");
    }) 
}

const checkFilterAddNone = (elemt) => {
    elemt.forEach(e => {
        e.classList.add("none");
    }) 
}

checkFilterRemoveNone(dev);
checkFilterRemoveNone(chef);
checkFilterRemoveNone(design);
checkFilterRemoveNone(graphisme);


// Permet d'appliquer les fonctions ajout ou suppression de class none au click des checkboxes
checkDev.addEventListener('click', () => {
    checkDev.checked ? checkFilterRemoveNone(dev) : checkFilterAddNone(dev);    
})

checkChef.addEventListener('click', () => {
    checkChef.checked ? checkFilterRemoveNone(chef) : checkFilterAddNone(chef);    
})

checkDesign.addEventListener('click', () => {
    checkDesign.checked ? checkFilterRemoveNone(design) : checkFilterAddNone(design);    
})

checkGraphisme.addEventListener('click', () => {
    checkGraphisme.checked ? checkFilterRemoveNone(graphisme) : checkFilterAddNone(graphisme);    
})



// Filtre de recherche

search.addEventListener("input", () => {
    let userSearch = search.value.toLowerCase(); 
    projets.forEach(projet => {
        if(projet.innerHTML.toLowerCase().indexOf(userSearch) > -1) {
            projet.classList.remove('none');
        } else {
            projet.classList.add('none');
        }
    })
})

    

 



