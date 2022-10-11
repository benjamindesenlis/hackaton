let userData;
let eleves = document.querySelector('.slider-eleves');
// aller chercher les données utilisateur (fetch)
const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=4")
    .then((res) => res.json())
    .then((data) => (userData = data.results));
};

// afficher les données à l'écran
const userDisplay = async () => {
  await fetchUser();
  console.log(userData);
  eleves.innerHTML = userData
  
  .map(
    (user) => 
      `<div>
      <img src=${user.picture.large} alt="picture">
      </div>`
    )
  .join("");
}
   

userDisplay();