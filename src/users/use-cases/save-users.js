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
  
  if ( user.id ) {
    throw 'Not implement update';
  }

  const updateUser = await createUser( saveUser );
  return updateUser;

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
    console.log(newUser);
    return newUser;

}