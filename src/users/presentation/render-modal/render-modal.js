import modalHtml from '../render-modal/render-modal.html?raw';
import '../render-modal/render-modal.css';
let modal, form;


export const showModal = () => {

  modal?.classList.remove('hide-modal');

}

export const hideModal = () => {

  modal?.classList.add('hide-modal');

}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = ( element ) => {

  if ( modal ) return;

  modal = document.createElement('div');
  modal.innerHTML = modalHtml;
  modal.className = 'modal-container hide-modal';


  form = modal.querySelector('form');

  modal.addEventListener('click', (event) => {
    
    if ( event.target.className == 'modal-container' ) {
      hideModal();
    }
  
  });
  
  form.addEventListener('submit', (event) => {
    
    event.preventDefault();
    console.log(event);
  
  });

  element.append( modal );

}
