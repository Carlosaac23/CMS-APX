function addWorkCard() {
  const template = document.querySelector('#portfolio__card-template');
  const container = document.querySelector('.portfolio__content');

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function main() {
  addWorkCard();
  addWorkCard();
  addWorkCard();
}

main();
