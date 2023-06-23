import { User } from '../models/users' 


/**
 * 
 * @param {User} userLike 
 */
export const saveUsers = async ( userLike ) => {

  const user = new User( userLike );
  
  if ( user.id ) {
    throw 'Not implement update';
  }

  const updateUser = await createUser( user );
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