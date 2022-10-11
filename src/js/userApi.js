
let cartes = document.querySelectorAll('.carte');

let users;



//FETCH
const getData = () => {
  fetch("https://randomuser.me/api/?results=16").then((res) => res.json()).then((data) => {
    users = data.results;
    console.log(users);
    console.log(users[0]);




    let tour = 0;
    cartes.forEach(element => {
      for (index = 0; index < 4; index++) {
        let number = index + tour
        let user = users[number];

        element.innerHTML += `<div id="eleve${number}"class="eleve-container">
                            <img src=${user.picture.large} alt="picture">
                            <p class="eleve-titre">${user.name.first} ${user.name.last}</p>
                            <p class="eleve-age">${user.dob.age} ans</p>
                            <p class="eleve-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium magni aut sapiente nesciunt id consequatur?</p>
                            </div>`;
      }
      tour = tour + 4;
    });
  });
};





getData();
