function addWorkCard(params = {}) {
  const template = document.querySelector('#portfolio__card-template');
  const container = document.querySelector('.portfolio__content');

  template.content.querySelector('.portfolio__card-title').textContent = params.title;
  template.content.querySelector('.portfolio__card-text').textContent = params.description;
  template.content.querySelector('.portfolio__img').src = params.image;
  template.content.querySelector('.portfolio__card-link').href = params.url;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getContentfulData() {}

function main() {
  const contentfulData = getContentfulData();
}

main();
