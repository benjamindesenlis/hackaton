let percent = document.querySelector('#percent');
let bar = document.querySelector('#progressbar-right');

let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = () => {
    let progress = (window.pageYOffset / totalHeight) * 100;
    bar.style.height = progress + "%";
}