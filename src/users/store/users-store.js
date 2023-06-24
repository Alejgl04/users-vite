import { User } from "../models/users";
import { loadUsers } from "../use-cases/load-users";


const state = {

  currentPage: 0,
  users:[],

}

const loadNextPage = async() => {

  const users = await loadUsers( state.currentPage + 1);

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

/**
 * 
 * @param {User} updatedUser 
 */
const onUserChanged = async( updatedUser ) => {

  let wasUserFound = false;

  state.users = state.users.map( user => {
    if ( user.id === updatedUser.id ) {
      wasUserFound = true;
      return updatedUser;
    }
    return user;
  });

  if ( state.users.length < 10 && !wasUserFound ) {
    state.users.push( updatedUser );
  }
  
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