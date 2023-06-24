

/**
 * 
 * @param {String|Number} id 
 */
export const deteleUser = async ( id ) => {

  const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
  const responseUser = await fetch( url, {
    method: 'DELETE', 
  });

  const deletedResult = await responseUser.json();
  console.log({ deletedResult });
  return true;

}