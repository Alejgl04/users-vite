import { loadUsers } from "../use-cases/load-users";


const state = {

  currentPage: 0,
  users:[],

}

const loadNextPage = async() => {

  const users = await loadUsers( state.currentPage + 1);
  console.log(users);

  if ( users.length === 0 ) return;

  state.currentPage += 1;
  state.users = users;

}

const loadPreviousPage = async() => {
  if( state.currentPage === 1 ) return;

  const users = await loadUsers( state.currentPage - 1);

  state.currentPage -=1;
  state.users = users;
}

const onUserChanged = async() => {

  throw new Error('Not implmenent');
  
}

const realodPage = async() => {

  throw new Error('Not implmenent');
  
}

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  realodPage,

  /**
   * 
   * @returns {User[]}
   */
  getUsers: () => [...state.users],
  getCurrentPage: () => state.currentPage

}