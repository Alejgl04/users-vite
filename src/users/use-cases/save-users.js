import { localhostUserToModel } from '../mappers/localhost-user.mapper';
import { userModelToLocalHost } from '../mappers/user-to-localhost';
import { User } from '../models/users' 


/**
 * 
 * @param {User} userLike 
 */
export const saveUsers = async ( userLike ) => {
  
  
  const user = new User( userLike );
  if ( !user.firstName || !user.lastName )
    throw 'First and last name are required';

  const saveUser = userModelToLocalHost( user );
  let userUpdated;

  if ( user.id ) {
    userUpdated = await updateUser( saveUser );
  }
  else {
    userUpdated = await createUser( saveUser );
  }

  return localhostUserToModel(userUpdated);
}


/**
 * 
 * @param {User} user 
 */
const createUser = async ( user ) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const responseUser = await fetch( url, {
      method: 'POST',
      body: JSON.stringify( user ),
      headers: {
        'Content-Type' : 'application/json'
      } 
    });

    const newUser = await responseUser.json();
    return newUser;

}
/**
 * 
 * @param {User} user 
 */
const updateUser = async ( user ) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
    const responseUser = await fetch( url, {
      method: 'PATCH',
      body: JSON.stringify( user ),
      headers: {
        'Content-Type' : 'application/json'
      } 
    });

    const updateUser = await responseUser.json();
    return updateUser;

}