export default function Framwroks(type, setShowModal, setModalText) {
  switch (type) {
    case 'react':
      break;
    case 'angular':
      window.location =
        '/learning-lab/tailwind-starter-kit#/documentation/angular/alerts';
      break;
    case 'html':
      window.location =
        '/learning-lab/tailwind-starter-kit#/documentation/javascript/alerts';
      break;
    case 'vue':
      window.location =
        '/learning-lab/tailwind-starter-kit#/documentation/vue/alerts';
      break;
    default:
      setShowModal(true);
      setModalText(type);
      break;
  }
}
