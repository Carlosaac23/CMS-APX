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

function getWorks() {
  const CONTENTFUL_API =
    'https://preview.contentful.com/spaces/6d07ippi0mdt/environments/master/entries?access_token=RyK78_uIi87d-67kLSoWBlAawjqlFfdf_xcm_oLWCh0&content_type=work';

  return fetch(CONTENTFUL_API)
    .then(res => res.json())
    .then(data => {
      const fieldsCollections = data.items.map(item => {
        const imageId = item.fields.imagen.sys.id;
        const asset = data.includes.Asset.find(asset => asset.sys.id === imageId);
        const imageUrl = asset ? (asset.fields.file.url.startsWith('https') ? asset.fields.file.url : 'https:' + asset.fields.file.url) : '';

        return {
          title: item.fields.titulo,
          description: item.fields.descripcion,
          image: imageUrl,
          url: item.fields.url,
        };
      });

      return fieldsCollections;
    });
}

function main() {
  getWorks().then(works => {
    for (const w of works) {
      addWorkCard(w);
    }
  });
}

main();
