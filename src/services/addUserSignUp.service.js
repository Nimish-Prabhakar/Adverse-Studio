import { ADD_USER_SIGN_UP_API } from '../constants/AppConstants';

/**
 * Service to add a new customer.
 * @param {Object} userDetails - Details of the User to be signed up..
 */
const addUserSignUp = async (userDetails) => {
  const requestBody = {
    email_id: userDetails.email_id,
    first_name: userDetails.first_name,
    last_name: userDetails.last_name,
    password: userDetails.password,
  };

  try {
    const response = await fetch(ADD_USER_SIGN_UP_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });

    const json = await response.json();
    return { ok: response.ok, json };
  } catch (error) {
    return { ok: false, json: error };
  }
};

export default addUserSignUp;
