import { renderAddButton } from "./presentation/render-add-button/render-add-button";
import { renderButtons } from "./presentation/render-buttons/render-button";
import { renderModal } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";
import { saveUsers } from "./use-cases/save-users";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async( element ) => {

  element.innerHTML = 'Loading...';
  await usersStore.loadNextPage();
  element.innerHTML = '';
  renderTable( element );
  renderButtons( element );
  renderAddButton( element );
  renderModal( element, async( userLike) => {
    const user = await saveUsers( userLike );
    usersStore.onUserChanged( user );
    renderTable();
  });

}