document.body.style.border = "4px solid purple";
document.body.style.background = "#312e2b";
document.querySelectorAll('a').forEach(function (element) {
  element.style.color = "#FFFFFF";

  if (element.getAttribute('href') === '/blog/community' || element.getAttribute('href') === '/watch') {
    element.remove();
  }

});

const chesscomLogo = document.createElement('img');

chesscomLogo.src = 'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png';
chesscomLogo.height = 50;
chesscomLogo.width = 50;
chesscomLogo.style.float = "left";

document.querySelector('.site-title').appendChild(chesscomLogo);
let user_tag = document.getElementById('user_tag');
user_tag.textContent = "⚙";
user_tag.style.fontSize = "25px";

document.querySelectorAll('span').forEach(function (element) {
  element.style.color = "#FFFFFF";
});

document.body.innerHTML = document.body.innerHTML
  .replace('lichess', 'Chess')
  .replace('.org', '.com')
  .replace('Donate', '');

function loadCSSFile(filename) {
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("href", filename);
  document.head.appendChild(link);
  console.log(link);
}

loadCSSFile("squares.css");

