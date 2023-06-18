import { loadUsers } from "../use-cases/load-users";


const state = {

  currentPage: 0,
  users:[],

}

const loadNextPage = async() => {

  await loadUsers( state.currentPage + 1);
  
}

const loadPreviousPage = async() => {

  throw new Error('Not implmenent');

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

  getUser: () => [...state.users],
  getCurrentPage: () => state.currentPage

}