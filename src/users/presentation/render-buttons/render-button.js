

/**
 * 
 * @param {HTMLDivElement} element 
 */

import usersStore from "../../store/users-store";

export const renderButtons = ( element ) => {

  const nextButton = document.createElement('button');
  nextButton.innerText = ' Next >';

  const prevButton = document.createElement('button');
  prevButton.innerText = '< Prev ';
  
  const currentPageLabel = document.createElement('span');
  currentPageLabel.id = 'current-page';
  currentPageLabel.innerText = usersStore.getCurrentPage();

  element.append( prevButton, currentPageLabel, nextButton );

}