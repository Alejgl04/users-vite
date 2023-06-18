import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/users";


/**
 * 
 * @param {Number} page;
 * @returns { Promise<User[]>}
 */
export const loadUsers = async( page = 1 ) => {

  const baseUrl = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
  const res  = await fetch( baseUrl );
  const data = await res.json();

  const users = data.map(
    user => localhostUserToModel(user)
  );

  return users;

}