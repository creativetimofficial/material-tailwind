export default function Framwroks(type, setShowModal, setModalText) {
  switch (type) {
    case 'react':
      break;
    case 'angular':
      // window.location = '/documentation/angular/alerts';
      break;
    case 'html':
      // window.location = '/documentation/css/alerts';
      break;
    case 'vue':
      // this.location = '/documentation/vue/alerts';
      break;
    case 'javascript':
      // this.location = '/documentation/javascript/alerts';
      break;
    default:
      setShowModal(true);
      setModalText(type);
      break;
  }
}
