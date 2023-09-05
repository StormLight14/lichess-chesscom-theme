document.body.style.border = "4px solid purple";
document.body.style.background = "#312e2b";
document.querySelectorAll('a').forEach(function (element) {
  element.style.color = "#FFFFFF";
  console.log(element.getAttribute('href'));

  if (element.getAttribute('href') === '/blog/community' || element.getAttribute('href') === '/watch') {
    element.remove();
  }

});
let user_tag = document.getElementById('user_tag');
user_tag.textContent = "⚙";

document.querySelectorAll('span').forEach(function (element) {
  element.style.color = "#FFFFFF";
});

document.body.innerHTML = document.body.innerHTML
  .replace('lichess', 'Chess')
  .replace('.org', '.com')
  .replace('Donate', '');
